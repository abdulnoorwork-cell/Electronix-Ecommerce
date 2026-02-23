import db from '../config/db.js'
import 'dotenv/config'
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing order using COD method
export const placeOrder = async (req, res) => {
    const { user_id } = req.params;
    const { items, deliveryInfo, shipping_fee } = req.body;
    let totalAmount = shipping_fee;
    items.forEach(item => {
        totalAmount += item.offerPrice * item.quantity;
    });

    if (!items || items.length === 0) {
        return res.status(400).json({ messege: "Cart is empty" });
    }
    const orderQuery = `
    INSERT INTO orders 
    (user_id, total_amount, full_name, phone, address, city, state, postal_code, country)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
    const values = [
        user_id,
        totalAmount,
        deliveryInfo.full_name,
        deliveryInfo.email,
        deliveryInfo.phone,
        deliveryInfo.address,
        deliveryInfo.city,
        deliveryInfo.state,
        deliveryInfo.postal_code,
        deliveryInfo.country
    ];
    db.query(orderQuery, values, (err, result) => {
        if (err) return res.status(500).json(err);
        const orderId = result.insertId
        const orderItemsQuery = `
      INSERT INTO order_items (order_id, product_id, quantity, price)
      VALUES ?
    `;

        const itemValues = items.map(item => [
            orderId,
            item._id,
            item.quantity,
            item.offerPrice
        ]);
        db.query(orderItemsQuery, [itemValues], (err) => {
            if (err) return res.status(500).json(err);
            const deleteQuery = 'DELETE FROM cart_items WHERE user_id = ?';
            db.query(deleteQuery, [user_id], (err3) => {
                if (err3) return res.status(500).json(err3);
                res.json({
                    messege: "Order placed successfully",
                    order_id: orderId
                });
            })
        })
    })
    // if (payment_method === 'ONLINE') {
    //     const orderQuery = `INSERT INTO orders (user_id,total_amount,full_name, phone, address, city, state, postal_code, country) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`
    //     const values = [
    //         user_id,
    //         totalAmount,
    //         deliveryInfo.full_name,
    //         deliveryInfo.phone,
    //         deliveryInfo.address,
    //         deliveryInfo.city,
    //         deliveryInfo.state,
    //         deliveryInfo.postal_code,
    //         deliveryInfo.country
    //     ];
    //     db.query(orderQuery, values, (err, result) => {
    //         if (err) return res.status(500).json(err);
    //         const orderId = result.insertId;
    //         const orderItemsQuery = 'INSERT INTO order_items (order_id,product_id,quantity,price) VALUES ?'
    //         const itemValues = items.map(item => [
    //             orderId,
    //             item._id,
    //             item.quantity,
    //             item.offerPrice
    //         ]);
    //         db.query(orderItemsQuery, [itemValues],async (err, result) => {
    //             if (err) return res.status(500).json(err);
    //             const lineItems = items.map((product) => ({
    //                 price_data: {
    //                     currency: "usd",
    //                     product_data: {
    //                         name: product.name,
    //                         image: [product.image]
    //                     },
    //                     unit_amount: totalAmount
    //                 },
    //                 quantity: product.quantity
    //             }))
    //             const session = await stripe.checkout.sessions.create({
    //                 payment_method_types: ["card"],
    //                 line_items: lineItems,
    //                 mode: "payment",
    //                 success_url: "http://localhost:5173/success",
    //                 cancel_url: "http://localhost:5173/cancel"
    //             })
    //             res.json({ id: session.id })
    //             const deleteQuery = 'DELETE FROM cart_items WHERE user_id = ?';
    //             db.query(deleteQuery, [user_id], (err3) => {
    //                 if (err3) return res.status(500).json(err3);
    //                 res.json({
    //                     messege: "Order placed successfully",
    //                     order_id: orderId
    //                 });
    //             })
    //         })
    //     })
    // }
}

export const getUserOrders = (req, res) => {
    const { user_id } = req.params;
    const sql = 'SELECT * FROM orders JOIN order_items ON orders._id = order_items.order_id JOIN products ON products._id = order_items.product_id WHERE user_id =?';
    db.query(sql, [user_id], (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, messege: err })
        } else {
            res.status(200).json(data)
        }
    })
}

export const fetchAllOrders = (req, res) => {
    const sql = 'SELECT * FROM orders JOIN order_items ON orders._id = order_items.order_id JOIN products ON products._id = order_items.product_id';
    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, messege: err })
        } else {
            res.status(200).json(data)
        }
    })
}

export const deleteUserOrder = (req, res) => {
    const { order_id } = req.params;
    const deleteQuery = 'DELETE FROM order_items WHERE order_id = ?';
    db.query(deleteQuery, [order_id], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, messege: err })
        } else {
            const sql = 'DELETE FROM orders WHERE _id = ?';
            db.query(sql, [order_id], (err, result) => {
                if (err) {
                    return res.status(500).json({ success: false, messege: err })
                }
                res.status(200).json({ success: true, messege: "Order Cancelled" })
            })
        }
    })
}

export const updateOrderStatus = (req, res) => {
    const { order_id } = req.params;
    const { order_status } = req.body;
    if (!order_status) {
        return res.status(400).json({ success: false, messege: "Status can,t be null" })
    }
    const sql = 'SELECT * FROM orders JOIN order_items ON orders._id = order_items.order_id';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, messege: err })
        }
        const values = [order_status]
        db.query('UPDATE orders SET order_status = ? WHERE _id = ?', [...values, order_id], (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, messege: err })
            }
            res.status(200).json({ success: true, messege: "Order Status updated" })
        })
    })
}