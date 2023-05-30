// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import express, { Request, Response } from "express";
import cors from "cors";
import { getValues } from "./services/cardComposer";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/values", (req: Request, res: Response) => {
  res.send(getValues());
});
