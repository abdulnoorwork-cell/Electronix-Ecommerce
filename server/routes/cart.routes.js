import express from 'express';
import { addToCart, getCart, quantityUpdated, removeFromCart, totalItems, totalPrice } from '../controllers/cart.controller.js';
const router = express.Router();

router.post('/addtocart/:user_id', addToCart);
router.get('/getcartitems/:user_id',getCart);
router.get('/totalamount/:user_id',totalPrice);
router.get('/totalitems/:user_id', totalItems);
router.post('/removefromcart/:user_id',removeFromCart);
router.put('/update-quantity/:user_id',quantityUpdated);
export default router;