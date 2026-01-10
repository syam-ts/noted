import express from "express";
import connectDB from "./config/db";
import bodyParser from "body-parser";
import noteRouter from "./routes/postRoute";
import userRouter from "./routes/userRoute";
import { config } from "dotenv";
config({ path: ".env" });

const app = express();
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/note", noteRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  connectDB();
  console.log(`Server listening to PORT ${PORT}`);
});
