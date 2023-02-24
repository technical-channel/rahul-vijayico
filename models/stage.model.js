import mongoose from "mongoose";

const stageSchema = mongoose.Schema({
  stage: {
    type: Number,
    unique: true,
    required: true,
  },
  perTokenPrice: {
    type: Number,
    unique: true,
    required: true,
  },
  bonus: {
    type: Number,
    min: 0,
    max: 50,
    default: 0,
  },
  endDate: {
    type: String,
    required: true,
  },
  totalRaisedAmount: {
    type: Number,
    default: 0,
  },
  tokenForStage: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Stage", stageSchema);
