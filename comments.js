// Create web server
// Create a route for /comments
// Set the content type to application/json
// Send the following JSON data: { "comments": [] }

const express = require("express");
const app = express();

app.get("/comments", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ comments: [] }));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});