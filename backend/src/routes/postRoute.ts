import { Router } from "express";
import postController from "../controller/postCtrl";

const postRouter = Router();

postRouter.post("/new", postController.createPost);
postRouter.put("/new", postController.ediPost);
postRouter.put("/new", postController.likePost);
postRouter.put("/new", postController.commentPost);

export default postRouter;
