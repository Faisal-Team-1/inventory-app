const router = require("express").Router();
const { Item } = require("../models");

// GET /items
router.get("/", async (req, res, next) => { // set up a route to handle GET requests to the /items route
  try {
    const items = await Item.findAll(); // find all items in the database
    res.send(items); // send the items as a response
  } catch (error) {
    next(error); // pass the error to the error handler middleware
  }
});

// GET /items/:id
router.get("/:id", async (req, res, next) => { // set up a route to handle GET requests to the /items/:id route
  try {
    const item = await Item.findByPk(req.params.id); // find an item with the specified ID in the database
    res.send(item); // send the item as a response
  } catch (error) {
    next(error); // pass the error to the error handler middleware
  }
});

module.exports = router;
