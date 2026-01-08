import mongoose from "mongoose";

const postMdl = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
    default: 0
  },
  comments: {
    type: [String],
    required: true,
      default: []
  },
  share: {
    type: Number,
    required: true,
      default: 0
  },
  description: {
    type: String,
    required: true,
  },
});

export const postModel = mongoose.model("Post", postMdl);
