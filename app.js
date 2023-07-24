const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const today = new Date();
let listItems = ["Eat Food", "Drink water"];
let worklist = ["Do home work", "Submit assinment"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  let option = {
    day: "numeric",
    weekday: "short",
    month: "long",
  };
  let date = today.toLocaleString("en-us", option);
  res.render("list1", {
    todayDate: date,
    list: listItems,
  });
});
app.get("/work", (req, res) => {
  date = "Work List";
  res.render("list2", {
    todayDate: date,
    list: worklist,
  });
});

app.post("/", (req, res) => {
  let items = req.body.newItem;
  listItems.push(items);
  res.redirect("/");
});
app.post("/work", (req, res) => {
  let items = req.body.newItem;
  worklist.push(items);
  res.redirect("/work");
});
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
