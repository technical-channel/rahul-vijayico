import currencyModel from "../../models/currency.model.js";

export const currencyResolver = {
  Query: {
    getCurrency: async (root, args) => {
      let currency = await currencyModel.findOne({ ...args });
      return currency;
    },
    getAllCurrency: async (root, args) => {
      let currency = await currencyModel.find({});
      return currency;
    },
  },
  Mutation: {
    createCurrency: async (root, args) => {
      let currency = new currencyModel(args);
      return await currency.save();
    },
  },
};
