const express = require('express');
const { getAllProducts, addNewProduct, deleteProduct, updateProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/add', addNewProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

module.exports = router;