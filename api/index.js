const express = require("express");
const router = express.Router();
const fs = require("fs");
const https = require("https");
const fileName = "values.json";

router.get("/api/data", (req, res) => {
  let result = fs.readFileSync(fileName, "utf8");
  res.json(result);
});

router.get("/api/data/download", (req, res) => {
  res.download("values.json", "values.json");
});

router.post("/api/data/update", (req, res) => {
  fs.writeFile(fileName, JSON.stringify(req.body.data), (err) => {
    if (err) {
      res.json("Something went wrong");
    }
  });
  res.json("Success!");
});

module.exports = router;
