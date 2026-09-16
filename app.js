const express = require("express");
const { create } = require("lodash");
const { title } = require("node:process");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { render } = require("ejs");
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// connct to MongoDB
const dbURI =
  "mongodb+srv://newuser:newuser1234@nodetuts.2lzvyzg.mongodb.net/note-tuts";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");
// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// // mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("6aa4e32a2a00531abd32685f")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/", (req, res) => {
  res.redirect("/blogs");

  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem beatae dignissimos odio. Culpa consequatur voluptatum nihil at. Provident, aliquam. Voluptates, necessitatibus. Vero perferendis, molestiae autem quaerat officia totam quidem.",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem beatae dignissimos odio. Culpa consequatur voluptatum nihil at. Provident, aliquam. Voluptates, necessitatibus. Vero perferendis, molestiae autem quaerat officia totam quidem.",
  //   },
  //   {
  //     title: "How to use AI",
  //     snippet:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem beatae dignissimos odio. Culpa consequatur voluptatum nihil at. Provident, aliquam. Voluptates, necessitatibus. Vero perferendis, molestiae autem quaerat officia totam quidem.",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

// 404 page IMP should stay at bottom
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
