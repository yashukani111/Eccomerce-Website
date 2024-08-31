const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const{
    login,
    signup,
} = require('../controllers/Auth')

router.post('/login',login)
// router.post('/dashboard', auth ,dashboard)
router.post('/signup',signup)

module.exports = router