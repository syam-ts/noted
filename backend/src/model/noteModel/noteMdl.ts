import mongoose from "mongoose";

interface INote {
  userId: string | any;
  title: string;
  content: string;
  createdAt: Date;
}

const noteMdl = new mongoose.Schema<INote>({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
  },
});

export const noteModel = mongoose.model("Note", noteMdl);
