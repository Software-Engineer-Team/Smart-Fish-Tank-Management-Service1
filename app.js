const express = require("express");

const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const reminderRoute = require("./routes/reminder.route");
const authRoute = require("./routes/auth.route");
const dataRoute = require("./routes/data.route");
const feedingRoute = require("./routes/feeding.routes");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(authRoute);

app.use(reminderRoute);

app.use(dataRoute);

app.use(feedingRoute);

mongoose
  .connect(
    "mongodb+srv://minhthuctp:Thuc1234@cluster0.4jvzfsq.mongodb.net/sftm?retryWrites=true&w=majority"
  )
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
