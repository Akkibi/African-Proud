import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
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
  
  const Video = mongoose.models.videos || mongoose.model("videos", videoSchema);

  export default Video;
