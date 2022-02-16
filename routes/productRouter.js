var express = require("express");
const { Mongoose } = require("mongoose");
var productRouter = express.Router();
var data = require("../data.json");
var Product = require("../models/Product");

/* Insert list of products from data.json */
productRouter.post("/insertMany", function (req, res, next) {
  Product.insertMany(data, function (error, result) {
    if (error) {
      res.status(500).send({ error: error });
    }
    console.log("Insert successful");
    res.status(200).send(result);
  });
});

productRouter.delete("/deleteAll", async function (req, res, next) {
  Product.deleteMany({}, function (error, result) {
    if (error) {
      res.status(500).send({ error: error });
    }
    console.log("Delete many successful");
    res.status(200).send(result);
  });
});

/* Get product by id */
productRouter.get("/getProduct/:id", function (req, res, next) {
  Product.findOne({ id: req.params.id }, function (error, result) {
    if (error) {
      res.status(500).send({ error: error });
    }

    res.status(200).send(result);
  });
});

/* Get all products */
productRouter.get("/getAllProducts", function (req, res, next) {
  Product.find({}, function (error, result) {
    if (error) {
      res.status(500).send({ error: error });
    }
    res.status(200).send(result);
  });
});

/* Get products by category */
productRouter.get("/getProducts/:category", function (req, res, next) {
  Product.find({ category: req.params.category }, function (error, result) {
    if (error) {
      res.status(500).send({ error: error });
    }

    res.status(200).send(result);
  });
});

module.exports = productRouter;
