
import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });
  app.get("/about_us", (req, res) => {
    res.render("about_us.ejs");
  });
  app.get("/cpf", (req, res) => {
    res.render("cpf.ejs");
  });
  app.get("/committees", (req, res) => {
    res.render("committees.ejs");
  });
  app.get("/keynotes", (req, res) => {
    res.render("keynotes.ejs");
  });
  app.get("/submission", (req, res) => {
    res.render("submission.ejs");
  });
  app.get("/contact_us", (req, res) => {
    res.render("contact_us.ejs");
  });
  app.get("/registration", (req, res) => {
    res.render("registration.ejs");
  });
  


  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  