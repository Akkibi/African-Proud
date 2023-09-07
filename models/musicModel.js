import mongoose from "mongoose";

// Music Schema
const musicSchema = mongoose.Schema({
  title: String,
  content: String,
  link: String,
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Music = mongoose.models.music || mongoose.model("music", musicSchema);

  export default Music;
