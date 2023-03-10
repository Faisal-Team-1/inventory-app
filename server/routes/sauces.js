const express = require("express");
const router = express.Router();
const { Sauce } = require("../models");

// GET /sauces
router.get("/", async (req, res, next) => { // set up a route to handle GET requests to the /sauces route
  try {
    const sauces = await Sauce.findAll(); // find all sauces in the database
    res.send(sauces); // send the sauces as a response
  } catch (error) {
    next(error); // pass the error to the error handler middleware
  }
});

module.exports = router;
