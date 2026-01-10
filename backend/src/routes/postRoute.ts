import { Router } from "express";
import noteController from "../controller/noteCtrl";

const noteRouter = Router();

noteRouter.post("/new", noteController.newNote);
noteRouter.put("/edit", noteController.ediNote);

export default noteRouter;
