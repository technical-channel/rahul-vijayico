import { ethers } from "ethers";
import walletModel from "../../models/wallet.model.js";
import transactionModel from "../../models/transaction.model.js";
import { uniqueID } from "../../utils/index.js";
import stageModel from "../../models/stage.model.js";
import _ from "lodash";
import currencyModel from "../../models/currency.model.js";
import axios from "axios";
export const walletResolver = {
  Query: {
    getWallet: async (root, args) => {
      let wallet = await walletModel.findOne({ ...args });
      return wallet;
    },
    getAllWallet: async (root, args) => {
      let wallet = await walletModel.find({});
      return wallet;
    },
  },
  Mutation: {
    buyToken: async (root, args) => {
      let newWallet = ethers.Wallet.createRandom();
      let wallet = new walletModel({
        walletAddress: newWallet.address,
        privateKey: newWallet.privateKey,
        ...args,
      });
      wallet = await wallet.save();
      let stage = await stageModel.find({});
      let currency = await currencyModel.findById(args.currency);
      stage = _.sortBy(
        _.filter(stage, (value) => {
          return new Date(value.endDate) > new Date();
        }),
        (value) => {
          return value.stage;
        }
      );
      let tokens = args.usdAmount / stage[0].perTokenPrice;
      console.log(currency.symbol);
      let priceInUsd = await axios.get(
        "https://cex.io/api/last_price/" + currency.symbol + "/USD"
      );

      let transaction = new transactionModel({
        transactionNumber: uniqueID(),
        user: args.user,
        tokens: tokens,
        usdAmount: args.usdAmount,
        currencyAmount: args.usdAmount / parseFloat(priceInUsd.data.lprice),
        currency: args.currency,
        toAddress: wallet._id,
      });
      await transaction.save();
      console.log(transaction);
      return wallet;
    },
  },
};
