import express from 'express'
import upload from '../middleware/multer.js'
import { addProduct, deleteProduct, getProducts, getSingleProduct, updateProduct } from '../controllers/product.controller.js';
import isAdmin from '../middleware/isAdmin.js';
const router = express.Router();

router.post('/add',isAdmin, addProduct);
router.get('/get-products',getProducts);
router.get('/product-detail/:productId',getSingleProduct);
router.delete('/delete/:productId',isAdmin, deleteProduct);
router.put('/update/:productId',isAdmin, updateProduct);

export default router;