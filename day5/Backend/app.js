const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
  res.json(users);
});

app.post("/users", (req, res) => {
  var users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
  const userId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push({ ...req.body, id: userId });
  fs.writeFileSync("users.json", JSON.stringify(users,null,2));
  res.send("User added successfully");
});

app.put("/users/:id", (req, res) => {  
  var users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
  const id = req.params.id;
  const{ name, age } = req.body;
  const index = users.findIndex((user) => user.id == id);
  if(index !== -1){
    users[index] = { ...users[index], name, age };
    fs.writeFileSync("users.json", JSON.stringify(users,null,2));
    res.send("User updated successfully");
  }
  else{
    res.send("User not found");
  }
});

app.listen(9001, () => {
  console.log("Server is running on http://localhost:9001");
});
