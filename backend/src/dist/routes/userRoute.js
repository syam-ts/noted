"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userCtrl_1 = __importDefault(require("../controller/userCtrl"));
const userRouter = (0, express_1.Router)();
userRouter.post("/signup", userCtrl_1.default.signup);
userRouter.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("body", email, password, req.body);
});
exports.default = userRouter;
