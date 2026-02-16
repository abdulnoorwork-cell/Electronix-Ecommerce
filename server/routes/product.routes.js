import express from 'express'
import upload from '../middleware/multer.js'
import { addProduct, deleteProduct, getProducts, getSingleProduct, updateProduct } from '../controllers/product.controller.js';
const router = express.Router();

router.post('/add',addProduct);
router.get('/get-products',getProducts);
router.get('/product-detail/:productId',getSingleProduct);
router.delete('/delete/:productId', deleteProduct);
router.put('/update/:productId', updateProduct);

export default router;