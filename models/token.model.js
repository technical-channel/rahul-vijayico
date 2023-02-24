import mongoose from "mongoose";

const tokenSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
    unique: true,
  },
  tokenBalance: {
    type: Number,
    default: 0,
  },
  daiBalance: { type: Number, default: 0 },
  usdtBalance: { type: Number, default: 0 },
  ethBalance: { type: Number, default: 0 },
});

export default mongoose.model("Token", tokenSchema);
