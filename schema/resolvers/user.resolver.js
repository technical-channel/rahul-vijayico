import userModel from "../../models/user.model.js";

export const userResolver = {
  Query: {
    getUser: async (root, args) => {
      return await userModel.findOne({ email: args.email });
    },
    getAllUsers: async (root, args) => {
      return await userModel.find({});
    },
    loginUser: async (root, args) => {
      return await userModel.findOne({
        email: args.email,
        password: args.password,
      });
    },
  },
  Mutation: {
    createUser: async (root, args) => {
      let user = new userModel(args);
      return await user.save();
    },
  },
};
