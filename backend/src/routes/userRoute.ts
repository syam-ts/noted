import { Router, Request, Response } from "express";
import userController from "../controller/userCtrl";

const userRouter = Router();

userRouter.post("/signup", userController.signup);

userRouter.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  console.log("body", email, password, req.body);
});

export default userRouter;
