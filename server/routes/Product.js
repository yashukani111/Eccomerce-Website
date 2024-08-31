const express = require('express');
const router = express.Router();
 const {
    createProduct,
 } = require('../controllers/Product');
const { auth, isBusiness } = require('../middleware/auth');
 
router.post("/create-product", auth, isBusiness, createProduct);

module.exports=router;