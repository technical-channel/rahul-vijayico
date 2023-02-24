import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  mobileNumber: {
    type: String,
    require: true,
  },
  countryCode: { type: String, require: true },
  dob: {
    type: String,
  },
  nationality: {
    type: String,
  },
  receiveToken: { type: String, default: "0" },
  isVerified: { type: Boolean, default: false },
});

export default mongoose.model("User", userSchema);
