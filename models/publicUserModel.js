import mongoose from "mongoose";

const publicUserSchema = mongoose.Schema({
  genre: String,
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  phoneNumber: String,
  phoneNumberCountry: String,
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  emailVerified: Boolean,
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin:{
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const PublicUser = mongoose.models.publicusers || mongoose.model("publicusers", publicUserSchema);

export default PublicUser;
