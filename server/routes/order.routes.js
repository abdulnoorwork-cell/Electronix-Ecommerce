import express from 'express'
import { deleteUserOrder, fetchAllOrders, getUserOrders, placeOrder } from '../controllers/order.controller.js';
const router = express.Router();

router.post('/place-order/:user_id',placeOrder);
router.get('/user-orders/:user_id',getUserOrders);
router.get('/get-orders',fetchAllOrders);
router.delete('/delete-order/:order_id',deleteUserOrder);

export default router;