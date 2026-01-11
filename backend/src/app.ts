import express from "express";
import cors from 'cors'
import connectDB from "./config/db";
import bodyParser from "body-parser";
import noteRouter from "./routes/noteRoute";
import userRouter from "./routes/userRoute";
import { config } from "dotenv";
config({ path: ".env" });

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use("/user", userRouter);
app.use("/notes", noteRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  connectDB();
  console.log(`Server listening to PORT ${PORT}`);
});
