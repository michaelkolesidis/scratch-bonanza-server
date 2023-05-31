// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

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
