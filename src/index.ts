// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import app from "./app";

// Specify the port number
const port = 4000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log("*** SCRATCH BONANZA ***");
  console.log("Server running on port 4000");
});
