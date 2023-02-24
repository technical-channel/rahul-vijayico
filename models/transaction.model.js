import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  transactionNumber: {
    type: String,
    require: true,
    unique: true,
  },
  tokens: { type: Number, require: true },
  usdAmount: { type: Number, require: true },
  currencyAmount: { type: Number, require: true },
  currency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency",
    require: true,
  },
  toAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallet",
    require: true,
  },
  isPayment: { type: Boolean, default: true },
  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "CANCELLED"],
    default: "PENDING",
  },
  type: {
    type: String,
    enum: ["PURCHASED"],
    default: "PURCHASED",
  },
});

export default mongoose.model("Transaction", transactionSchema);
