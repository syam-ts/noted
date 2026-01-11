"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteCtrl_1 = __importDefault(require("../controller/noteCtrl"));
const noteRouter = (0, express_1.Router)();
noteRouter.post("/new", noteCtrl_1.default.newNote);
noteRouter.put("/edit", noteCtrl_1.default.ediNote);
exports.default = noteRouter;
