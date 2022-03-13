const express = require("express");
const dotenv = require("dotenv").config();
const { urlencoded } = require("express");

const database = require("./config/dbConfig");
const routes = require("./routes");
const {
  pageNotFoundErrorMiddleWare,
  defaultErrorMiddleWare,
} = require("./middleware/errorMiddleWare");

const app = express();

// common middleware for payload parsing
app.use(express.json());
app.use(urlencoded({ extended: false }));

// middleware for router
app.use("/api", routes);

// default route to welcome
app.get("/", (req, res) => {
  res.send("Hi \n This is restful-api for club-management app");
});

// 404 page
app.use(pageNotFoundErrorMiddleWare);

// default error
app.use(defaultErrorMiddleWare);

// server start to listen on specific port number which is come from env file
app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on ${process.env.APP_PORT}`);
  // create  default admin
});
