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
const userMdl_1 = require("../model/userModel/userMdl");
const userController = {
    signup: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const signupUser = new userMdl_1.userModel({
                email,
                password,
            });
            const savedUser = yield signupUser.save();
            console.log("saved", savedUser);
            res.send("user signedup successfully");
        }
        catch (err) {
            res.send(err);
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const findUser = yield userMdl_1.userModel.find({
                email: email,
                password: password,
            });
            if (findUser) {
                res.send("user found");
            }
            else {
                res.send("user not found");
            }
        }
        catch (err) {
            res.send(err);
        }
    }),
};
exports.default = userController;
