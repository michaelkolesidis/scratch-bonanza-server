import express, { Request, Response } from "express";
import cors from "cors";
import { getValues } from "./services/cardComposer";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/values", (req: Request, res: Response) => {
  res.send(getValues());
});
