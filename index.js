const express = require("express");
const fs = require("fs");

const app = express();
const port = 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", require("./api/index"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
