import { Request, Response } from "express";
import { noteModel } from "../model/noteModel/noteMdl";

const noteController = {
  newNote: async (req: Request, res: Response) => {
    try {
      const { title, content }: { title: string; content: string } = req.body;
      const userId = "test_userId";

      const newNote = new noteModel({
        userId,
        title,
        content,
        createdAt: Date.now(),
      });

      const savedNote = await newNote.save();

      res.send("successfully created new note");
    } catch (err) {
      res.send(err);
    }
  },
  ediNote: async (req: Request, res: Response) => {
    try {
      const { noteId, title, content } = req.body;
      const userId = "test_userId";

      const findNote = await noteModel.find({ objectId: noteId });

      if (findNote) {
        const editNote = await noteModel.findByIdAndUpdate(
          noteId,
          {
            $set: {
              title,
              content,
            },
          },
          { new: true }
        );

        res.send("successfully edited note");
      } else {
        res.send("note not found");
      }
    } catch (err) {
      res.send(err);
    }
  },
};

export default noteController;
