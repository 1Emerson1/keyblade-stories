const express = require('express');

const passport = require('passport');

const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// user routes
router.get('/api/profile', passport.authenticate('jwt', { session: false }), userController.getUserById);
router.get('/api/allUsers', passport.authenticate('jwt', { session: false }), userController.getAllUsers);
router.post('/api/login', authController.authenticateUser);
router.post('/api/signup', authController.signUp);

module.exports = router;
