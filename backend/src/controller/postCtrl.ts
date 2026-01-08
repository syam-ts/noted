import { Request, Response } from "express";
import { postModel } from "../model/postModel/postMdl";

const postController = {
  createPost: async (req: Request, res: Response) => {
    try {
      const { image, description } = req.body;
      const userId = "test_userId";

      const creatingPost = new postModel({
        userId,
        image,
        description,
      });

      const savedPost = await creatingPost.save();

      res.send("successfully created new post");
    } catch (err) {
      res.send(err);
    }
  },
  ediPost: async (req: Request, res: Response) => {
    try {
      const { postId, image, description } = req.body;
      const userId = "test_userId";

      const findPost = await postModel.find({ objectId: postId });

      if (findPost) {
        const editPost = await postModel.findByIdAndUpdate(
          postId,
          {
            $set: {
              image,
              description,
            },
          },
          { new: true }
        );

        res.send("successfully edited  post");
      } else {
        res.send("post not found");
      }
    } catch (err) {
      res.send(err);
    }
  },
  likePost: async (req: Request, res: Response) => {
    try {
      const { postId } = req.body;

      const findPost = await postModel.findById({ postId });

      if (findPost) {
        const editPost = await postModel.findByIdAndUpdate(
          postId,
          {
            $inc: {
              likes: 1,
            },
          },
          { new: true }
        );

        res.send("successfully like post");
      } else {
        res.send("post not found");
      }
    } catch (err) {
      res.send(err);
    }
  },
  commentPost: async (req: Request, res: Response) => {
    try {
      const { postId, comment } = req.body;

      const findPost = await postModel.findById({ postId });

      if (findPost) {
        const commendPost = await postModel.findByIdAndUpdate(
          postId,
          {
            $addToSet: {
              comments: comment,
            },
          },
          { new: true }
        );

        res.send("successfully comment post");
      } else {
        res.send("post not found");
      }
    } catch (err) {
      res.send(err);
    }
  },
};


export default postController;