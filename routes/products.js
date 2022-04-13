const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

router.post('/api/isproductalreadyexist', productController.isproductalreadyexist);
router.post('/api/insertproduct', productController.insertProducts);
router.post('/api/showall', productController.showallProducts);
router.post('/api/updateproduct', productController.updateProducts);
router.post('/api/removeproduct', productController.removeProducts);

router.post('/api/addToCart', productController.addToCart);
router.post('/api/showCart', productController.showCart);
router.post('/api/removeCart', productController.removeCart);



module.exports = router;