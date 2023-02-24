import stageModel from "../../models/stage.model.js";

export const stageResolver = {
  Query: {
    getStage: async (root, args) => {
      return await stageModel.findOne({ ...args });
    },
    getAllStages: async (root, args) => {
      return await stageModel.find({});
    },
  },
  Mutation: {
    createStage: async (root, args) => {
      let stage = new stageModel({
        ...args,
        endDate: new Date(parseInt(args.endDate)).getTime(),
      });
      return await stage.save();
    },
  },
};
