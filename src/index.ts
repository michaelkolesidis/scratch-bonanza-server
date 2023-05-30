// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { app } from "./app";

const port = 4000;
app.listen(port, () => {
  console.log("*** SCRATCH BONANZA ***");
  console.log("Server running on port 4000");
});
