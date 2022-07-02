const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // return res.send("Hi Web Server is Up and Running....");
  res.send("U Mawi Na dam maw?");
});
app.listen(8080, () => {
  console.log("App listening on port 8080!");
});
