import express, { Request, Response } from "express";
import cors from "cors";
import { getValues } from "./services/cardComposer";

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Middleware for CORS handling
app.use(cors());

// Endpoint to retrieve values
app.get("/values", (req: Request, res: Response) => {
  const values = getValues();
  res.send(values);
});

export default app;
