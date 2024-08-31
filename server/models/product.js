const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    // img: {
    //     type: String, 
    //     required: true 
    // },
    productDescription: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true
    }, 
    category: {
        type: String,
        enum: ['food', 'clothing', 'electronics', 'other'],
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);
