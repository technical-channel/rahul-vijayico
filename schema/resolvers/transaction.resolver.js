import transactionModel from "../../models/transaction.model.js";
import userModel from "../../models/user.model.js";
import walletModel from "../../models/wallet.model.js";
import { getProvider } from "../../utils/connection.js";
import _ from "lodash";
export const transactionResolver = {
  Query: {
    getTransactionOfUser: async (root, args) => {
      return await transactionModel.findOne(...args);
    },
    getAllTransactionOfUser: async (root, args) => {
      return await transactionModel
        .find({ user: args.user })
        .populate("currency")
        .populate("toAddress");
    },
    getAllTransactionOfReceiveFund: async (root, args) => {
      let transactions = await transactionModel
        .find({ ...args })
        .populate("toAddress")
        .populate("user");

      let transactionDetails = await Promise.all(
        _.map(transactions, async (value) => {
          let address = await walletModel.findOne({
            _id: value.toAddress,
          });
          let balance = await getProvider().getBalance(address.walletAddress);
          console.log(balance / 1e18);
          console.log(address.walletAddress);
          return {
            ...value._doc,
            receivedAmount: balance / 1e18,
          };
        })
      );
      console.log(transactionDetails);
      return transactionDetails;
    },
  },
  Mutation: {
    updateTransactionStatus: async (root, args) => {
      let transaction = await transactionModel.findOneAndUpdate(
        { transactionNumber: args.transactionNumber },
        {
          $set: {
            status: args.status,
          },
        },
        { new: true }
      );
      if (args.status === "APPROVED") {
        let user = await userModel.findById(transaction.user);

        let updateUser = await userModel.findOneAndUpdate(transaction.user, {
          $set: {
            receiveToken: (
              parseFloat(user.receiveToken) + parseFloat(transaction.tokens)
            ).toString(),
          },
          new: true,
        });
        console.log(updateUser);
      }
      return transaction;
    },
  },
};
