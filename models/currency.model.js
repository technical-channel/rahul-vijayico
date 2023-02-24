import mongoose from "mongoose";

const currencySchema = mongoose.Schema({
  currency: {
    type: String,
    unique: true,
  },
  symbol: {
    type: String,
    unique: true,
  },
});

export default mongoose.model("Currency", currencySchema);
