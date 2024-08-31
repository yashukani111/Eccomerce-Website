const Product = require('../models/product');
const User = require('../models/user');

exports.createProduct = async (req, res) => {
    try {
        console.log("user",req.user);
        const userId = req.user.id;
        
        const { productName, productDescription, price, category } = req.body;

        // Check if all required fields are provided
        if (!productName || !productDescription || !price || !category) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory",
            });
        }

        // Find user details
        const userDetails = await User.findById(userId, { AccountType: "Business" });
        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: 'User details not found'
            });
        }

        // Create a new product
        const newProduct = await Product.updateOne({
            productName,
            productDescription,
            price,
            category
        });

        // Associate product with user
        await User.findByIdAndUpdate(
            userDetails._id,
            { $push: { products: newProduct._id } },
            { new: true }
        );

        // Respond with success message
        res.status(200).json({
            success: true,
            product: newProduct,
            message: "Product added successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
