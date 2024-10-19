import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
