const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// set up express app

const app = express();

// connect to MongoDB
const dbURI =
    "mongodb+srv://Blogger2:Blog123@cluster0.elykmd4.mongodb.net/node?retryWrites=true&w=majority&appName=Cluster0";
mongoose
    .connect(dbURI)
    .then((result) => {
        console.log("connected");
        app.listen(3000);
    })
    .then((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// listen for requests

// middleware and static files
app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

// blog routes
app.get("/blogs", (req, res) => {
    Blog.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("index", { title: "All Blogs", blogs: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog post" });
});

app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
