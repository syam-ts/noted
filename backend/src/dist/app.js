"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.get("/user", (req, res) => {
    const { userId } = req.query;
    res.send(`User Page Loading... -- User id ${userId}`);
});
app.get("/profile", (req, res) => {
    res.send("Profile Page Loading...");
});
app.listen(PORT, () => {
    console.log(`Server listening to PORT ${PORT}`);
});
