const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const users = fs.readFileSync("users.json", "utf-8");
  res.send(users);
});

app.post("/users", (req, res) => {
  var users = fs.readFileSync("users.json", "utf-8");
  const userId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push({ ...req.body, id: userId });
  fs.writeFileSync("users.json", JSON.stringify(users,null,2));
  res.send("User added successfully");
});

app.listen(9001, () => {
  console.log("Server is running on http://localhost:9000");
});
