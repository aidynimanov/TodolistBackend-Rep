const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["make project", "learn coding", "find a job"];
let workItems = [];
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", {listTitle: day, items: items });
});

app.post("/", function (req, res) {
  let item = req.body.formForListItem;
  console.log(req.body.list)
  if (req.body.list === "Worklist"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", (req,res)=>{
  res.render("list", {listTitle: "Worklist", items: workItems});
});

app.get("/about", (req, res)=>{
  console.log(res)
res.render("about");
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
