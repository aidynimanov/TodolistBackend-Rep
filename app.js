const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["make project", "learn coding", "find a job"];

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, items: items });
});

app.post("/", function (req, res) {
  let item = req.body.formForListItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
