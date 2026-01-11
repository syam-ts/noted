import { Request, Response } from "express";
import { noteModel } from "../model/noteModel/noteMdl";

const noteController = {
  newNote: async (req: Request, res: Response) => {
    try {
      const { title, content }: { title: string; content: string } = req.body;
      console.log('da', title)
      const userId ='69639a071104348b49c726a8';

      const newNote = new noteModel({
        userId,
        title,
        content,  
        createdAt: Date.now(),
      });

      const savedNote = await newNote.save();

      res.status(201).send("successfully created new note");
    } catch (err) {
      res.send(err);
    }
  },
  ediNote: async (req: Request, res: Response) => {
    try {
      const { noteId, title, content } = req.body;
      const userId = "69639a071104348b49c726a8";

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
  fetchAll: async (req: Request, res: Response) => {
    try { 
      const userId = "69639a071104348b49c726a8";

      const findNotes = await noteModel.find({userId});
      console.log('if user: ',findNotes)

      if (findNotes) {
         

        res.json({data: findNotes, message: 'successfully loaded notes'});
      } else {
        res.send("note not found");
      }
    } catch (err) {
      res.send(err);
    }
  },
};

export default noteController;
