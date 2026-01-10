import mongoose from "mongoose";

export interface IUser {
  _id: string | any;
  userName: string;
  email: string;
  password: string;
}

const userMdl = new mongoose.Schema<IUser>({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const userModel = mongoose.model("User", userMdl);
