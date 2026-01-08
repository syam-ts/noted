import express from "express";
import userRouter from "./routes/userRoute";
import { config } from "dotenv";

config({ path: ".env" });

import bodyParser from "body-parser";
import connectDB from "./config/db";
import postRouter from "./routes/postRoute";

const app = express();
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/post", postRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  connectDB();
  console.log(`Server listening to PORT ${PORT}`);
});
