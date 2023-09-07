import mongoose from "mongoose";

const artistSchema = mongoose.Schema({
  genre: String,
  firstName: String,
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  age: Number,
  city: String,
  country: String,
  phoneNumber: String,
  phoneNumberCountry: String,
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  contrat: {
    data: {
      type: Buffer,
      default: null,
    },
    contentType: {
      type: String,
      default: "", 
    },
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const ArtistUser = mongoose.models.artisteusers || mongoose.model("artisteusers", artistSchema);

export default ArtistUser;
