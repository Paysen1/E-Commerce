const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all categories
router.get('/', (req, res) => {
  try {
    // Find all categories
    // Be sure to include its associated Products
    Category.findAll({
      include: [{ model: Product }], // Include associated Products data
    }).then((categories) => {
      res.status(200).json(categories);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one category
router.get('/:id', (req, res) => {
  try {
    // Find one category by its `id` value
    // Be sure to include its associated Products
    Category.findByPk(req.params.id, {
      include: [{ model: Product }], // Include associated Products data
    }).then((category) => {
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json(category);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new category
router.post('/', (req, res) => {
  try {
    // Create a new category
    Category.create(req.body).then((category) => {
      res.status(201).json(category);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update category
router.put('/:id', (req, res) => {
  try {
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((category) => {
      if (!category[0]) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json({ message: 'Category updated successfully' });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete category
router.delete('/:id', (req, res) => {
  try {
    Category.destroy({
      where: { id: req.params.id },
    }).then((category) => {
      if (!category) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json({ message: 'Category deleted successfully' });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
