import db from "../config/db.js";
import { v2 as cloudinary } from 'cloudinary'

export const addProduct = async (req, res) => {
    const { name, category, about, description, price, offerPrice } = req.body;
    if (!name || !category || !description || !price || !offerPrice) {
        return res.status(400).json({ success: false, messege: "All fields are required" })
    }
    if (name.length > 80) {
        return res.status(401).json({ success: false, messege: "maximum name is 80 characters" })
    }
    if (name.length < 8) {
        return res.status(401).json({ success: false, messege: "name contains 8 characters atleast" })
    }
    // const uploadImages= [];
    // if(req.files && req.files.image){
    //     const images = Array.isArray(req.files.image) ? req.files.image : [req.files.image];
    //     for (const img of images) {
    //         const result = await cloudinary.uploader.upload(img.tempFilePath)
    //         uploadImages.push(result.url)
    //     }
    // }
    const { image } = req.files;
    const allowedFormat = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
    if (!allowedFormat.includes(image.mimetype)) {
        return res.status(400).json({ success: false, messege: "Invalid Format! Only jpg, jpeg, png, webp are allowed" });
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(image.tempFilePath)
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.log(cloudinaryResponse.error)
    }
    const imgUrl = cloudinaryResponse.url;
    const sql = 'INSERT INTO products(`name`,`category`,`about`,`description`,`price`,`offerPrice`,`image`) VALUES(?)';
    const values = [
        name,
        category,
        about,
        description,
        price,
        offerPrice,
        JSON.stringify(imgUrl)
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ success: false, messege: "Error in adding product: " + err })
        } else {
            res.status(201).json({ success: true, messege: "Product added successfully", data })
        }
    })
}

export const getProducts = (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, messege: 'Error in getting products: ' + err });
        } else {
            res.status(200).json(data);
        }
    })
}

export const getSingleProduct = (req, res) => {
    const { productId } = req.params;
    const sql = 'SELECT * FROM products WHERE _id = ?';
    db.query(sql, productId, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, messege: 'Error in getting single product: ' + err });
        } else {
            res.status(200).json(data);
        }
    })
}

export const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    const sql = 'DELETE FROM products WHERE _id = ?';
    db.query(sql, productId, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, messege: 'Error in deleting product: ' + err });
        } else {
            res.status(200).json({ success: true, messege: "Product deleted successfully" });
        }
    })
}

export const updateProduct = async (req, res) => {
    if (req.body.image !== '') {
        const { name, category, about, description, price, offerPrice } = req.body;
        if (!name || !category || !about || !description || !price || !offerPrice) {
            return res.status(400).json({ success: false, messege: "All fields are required" })
        }
        if (name.length > 80) {
            return res.status(401).json({ success: false, messege: "maximum name is 80 characters" })
        }
        if (name.length < 8) {
            return res.status(401).json({ success: false, messege: "name contains 8 characters atleast" })
        }
        if (about.length < 8) {
            return res.status(401).json({ success: false, messege: "name contains 8 characters atleast" })
        }
        if (description.length < 256) {
            return res.status(401).json({ success: false, messege: "descrupition contains 256 characters atleast" })
        }
        const { image } = req.files;
        const allowedFormat = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
        if (!allowedFormat.includes(image.mimetype)) {
            return res.status(400).json({ success: false, messege: "Invalid Format! Only jpg, jpeg, png, webp are allowed" });
        }
        const cloudinaryResponse = await cloudinary.uploader.upload(image.tempFilePath, {
            overwrite: true
        })
        if (!cloudinaryResponse || cloudinaryResponse.error) {
            console.log(cloudinaryResponse.error)
        }
        const imgUrl = cloudinaryResponse.url;
        const { productId } = req.params;
        const sql = 'UPDATE products SET name = ?, category = ?, about = ?, description = ? , price = ? , offerPrice = ?, image = ? WHERE _id = ?';
        const values = [
            name,
            category,
            about,
            description,
            price,
            offerPrice,
            JSON.stringify(imgUrl)
        ];
        db.query(sql, [...values, productId], (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ success: false, messege: "Error in updating product: " + err })
            } else {
                res.status(201).json({ success: true, messege: "Product updated successfully", data })
            }
        })
        return
    } else {
        const { name, category, about, description, price, offerPrice } = req.body;
        if (!name || !category || !about || !description || !price || !offerPrice) {
            return res.status(400).json({ success: false, messege: "All fields are required" })
        }
        if (name.length > 80) {
            return res.status(401).json({ success: false, messege: "maximum name is 80 characters" })
        }
        if (name.length < 8) {
            return res.status(401).json({ success: false, messege: "name contains 8 characters atleast" })
        }
        if (about.length < 8) {
            return res.status(401).json({ success: false, messege: "name contains 8 characters atleast" })
        }
        if (description.length < 256) {
            return res.status(401).json({ success: false, messege: "descrupition contains 256 characters atleast" })
        }
        const { productId } = req.params;
        const sql = 'UPDATE products SET name = ?, category = ?, about = ?, description = ? , price = ? , offerPrice = ? WHERE _id = ?';
        const values = [
            name,
            category,
            about,
            description,
            price,
            offerPrice
        ];
        db.query(sql, [...values, productId], (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ success: false, messege: "Error in updating product: " + err })
            } else {
                res.status(201).json({ success: true, messege: "Product updated successfully", data })
            }
        })
    }
}