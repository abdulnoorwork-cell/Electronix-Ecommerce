import db from '../config/db.js'
export const addToCart = (req, res) => {
    const { user_id } = req.params;
    const { product_id } = req.body;
    const sql = 'INSERT INTO cart_items (user_id, product_id, quantity) VALUES(?,?,1) ON DUPLICATE KEY UPDATE quantity = quantity + 1';
    db.query(sql, [user_id, product_id], (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, messege: "Error in addtocart: " + err })
        } else {
            res.status(201).json({ success: true, messege: "Added To Cart" })
        }
    })
}

export const getCart = (req, res) => {
    const { user_id } = req.params;
    const sql = 'SELECT products._id, products.name, products.offerPrice, products.image, cart_items.quantity, (products.offerPrice * cart_items.quantity) AS total FROM cart_items JOIN products ON cart_items.product_id = products._id WHERE cart_items.user_id = ?';
    db.query(sql, [user_id], (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, messege: "Error in getting cart items: " + err })
        } else {
            res.status(200).json(data);
        }
    })
}

export const totalPrice = (req, res) => {
    const { user_id } = req.params;
    const sql = 'SELECT SUM(products.offerPrice * cart_items.quantity) AS total FROM cart_items JOIN products ON cart_items.product_id = products._id WHERE cart_items.user_id = ?';
    db.query(sql, [user_id], (err, data) => {
        if (err) {
            return req.status(500).json({ success: false, messege: "Error in getting total amount: " + err })
        } else {
            res.status(200).json(data)
        }
    })
}

export const totalItems = (req, res) => {
    const { user_id } = req.params;
    const sql = 'SELECT SUM(quantity) AS total_items FROM cart_items WHERE user_id = ?';
    db.query(sql, [user_id], (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, messege: "Error in getting total cart items: " + err })
        } else {
            res.status(200).json(data)
        }
    })
}

export const removeFromCart = (req, res) => {
    const { product_id } = req.body;
    const { user_id } = req.params;
    const sql = 'DELETE FROM cart_items WHERE user_id = ? AND product_id = ?';
    db.query(sql, [user_id,product_id], (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, messege: "Error in remove from cart: " + err })
        } else {
            res.status(200).json({ success: true, messege: "Product removed" })
        }
    })
}

export const quantityUpdated = (req,res)=>{
    const {user_id} = req.params;
    const {product_id,quantity} = req.body;
    if(quantity<1){
        return res.status(400).json({success: false,messege:"Quantity should be atleast 1"})
    }
    const sql = 'UPDATE cart_items SET quantity = ? WHERE user_id = ? AND product_id = ?';
    const values = [quantity]
    db.query(sql,[...values,user_id,product_id],(err,data)=>{
        if(err){
            return res.status(500).json({success: false,messege:"Error in updating quantity: " + err})
        } else {
            res.status(200).json({success: true,messege: "Quantity updated"})
        }
    })
}