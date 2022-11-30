const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRoute = require("./routes/expense");
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
