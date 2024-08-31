const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { 
        type: String,
        required: true 
    },

    password: { 
        type: String, 
        required: true 
    },

    AccountType:{
        type:String,
        enum: ['Business', 'Personal'],
        default: 'Personal',
        required:true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
