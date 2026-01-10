import { Request, Response } from "express";
import { IUser, userModel } from "../model/userModel/userMdl";

const userController = {
  signup: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const signupUser = new userModel({
        email,
        password,
      });
      const savedUser = await signupUser.save();

      console.log("saved", savedUser);

      res.send("user signedup successfully");
    } catch (err) {
      res.send(err);
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const findUser = await userModel
        .find({
          email: email,
          password: password,
        })
        .lean<IUser>();
      if (findUser) {
        res.json({
          data: { id: findUser._id, userName: findUser.userName },
          message: "user found",
        });
      } else {
        res.send("user not found");
      }
    } catch (err) {
      res.send(err);
    }
  },
};

export default userController;
