const express = require("express");
const { create } = require("lodash");
const { title } = require("node:process");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem beatae dignissimos odio. Culpa consequatur voluptatum nihil at. Provident, aliquam. Voluptates, necessitatibus. Vero perferendis, molestiae autem quaerat officia totam quidem.",
    },
    {
      title: "Mario finds stars",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem beatae dignissimos odio. Culpa consequatur voluptatum nihil at. Provident, aliquam. Voluptates, necessitatibus. Vero perferendis, molestiae autem quaerat officia totam quidem.",
    },
    {
      title: "How to use AI",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem beatae dignissimos odio. Culpa consequatur voluptatum nihil at. Provident, aliquam. Voluptates, necessitatibus. Vero perferendis, molestiae autem quaerat officia totam quidem.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create New Blog" });
});

// 404 page IMP should stay at bottom
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
