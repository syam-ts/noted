"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const noteMdl_1 = require("../model/noteModel/noteMdl");
const noteController = {
    newNote: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, content } = req.body;
            console.log('da', title);
            const userId = '69639a071104348b49c726a8';
            const newNote = new noteMdl_1.noteModel({
                userId,
                title,
                content,
                createdAt: Date.now(),
            });
            const savedNote = yield newNote.save();
            res.status(201).send("successfully created new note");
        }
        catch (err) {
            res.send(err);
        }
    }),
    ediNote: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { noteId, title, content } = req.body;
            const userId = "69639a071104348b49c726a8";
            const findNote = yield noteMdl_1.noteModel.find({ objectId: noteId });
            if (findNote) {
                const editNote = yield noteMdl_1.noteModel.findByIdAndUpdate(noteId, {
                    $set: {
                        title,
                        content,
                    },
                }, { new: true });
                res.send("successfully edited note");
            }
            else {
                res.send("note not found");
            }
        }
        catch (err) {
            res.send(err);
        }
    }),
    fetchAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = "69639a071104348b49c726a8";
            const findNotes = yield noteMdl_1.noteModel.find({ userId });
            console.log('if user: ', findNotes);
            if (findNotes) {
                res.json({ data: findNotes, message: 'successfully loaded notes' });
            }
            else {
                res.send("note not found");
            }
        }
        catch (err) {
            res.send(err);
        }
    }),
};
exports.default = noteController;
