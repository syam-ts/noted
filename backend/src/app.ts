import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/user", (req: Request, res: Response) => {
  const { userId }: any = req.query;
  res.send(`User Page Loading... -- User id ${userId}`);
});
app.get("/profile", (req: Request, res: Response) => {
  res.send("Profile Page Loading...");
});

app.listen(PORT, () => {
  console.log(`Server listening to PORT ${PORT}`);
});
