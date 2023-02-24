import mongoose from "mongoose";

const walletSchema = mongoose.Schema({
  walletAddress: {
    type: String,
    require: true,
    unique: true,
  },
  privateKey: {
    type: String,
    require: true,
    unique: true,
  },
  currency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency",
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

export default mongoose.model("Wallet", walletSchema);
