const express = require('express');
const seedData = require('./seedData');
const { Item } = require('../models');
const router = express.Router();

router.get('/items', (req, res) => {
  res.json(seedData.items);
});

// Get all items
router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.render('all-items', { items });
  } catch (error) {
    next(error);
  }
});

// Get one item
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await Item.findByPk(id);
    res.render('one-item', { item });
  } catch (error) {
    next(error);
  }
});

// Add a new item
router.post('/', async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
    res.redirect(`/items/${newItem.id}`);
  } catch (error) {
    next(error);
  }
});

// Update an existing item
router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedItem = await Item.update(req.body, { where: { id } });
    res.redirect(`/items/${id}`);
  } catch (error) {
    next(error);
  }
});

// Delete an item
router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Item.destroy({ where: { id } });
    res.redirect('/items');
  } catch (error) {
    next(error);
  }
});
module.exports = router;
