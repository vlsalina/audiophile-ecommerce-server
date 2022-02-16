var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((ans) => {
    console.log("ConnectedSuccessful");
  })
  .catch((err) => {
    console.log("Error in the Connection");
  });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productRouter = require("./routes/productRouter");

var app = express();

app.use(cors());

const port = process.env.PORT || 3434;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/product", productRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

module.exports = app;
