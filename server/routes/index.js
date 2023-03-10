const express = require("express");
const router = express.Router();

// different model routers
router.use("/sauces", require("./sauces")); // use the sauces.js router for the /sauces route
router.use("/items", require("./items")); // use the items.js router for the /items route

module.exports = router;
