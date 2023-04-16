// Importing modules and functions
const router = require('express').Router();

// Import of the necessary modules and functions: express for creating the router, user-controller for handling user-related requests, and auth for authenticating the user requests.
const {
    createUser,
    getSingleUser,
    login,
    saveProperty,
    removeProperty,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

// Defining the routes for the user. Our POST and PUT
router.route('/').post(createUser).put(authMiddleware, saveProperty);

// POST. Our request with login credentials is handled by the login function.
router.route('/login').post(login);

// One of our GET's. Get the user data from '/me' and handle it by getSingleUser, which requires authentication
router.route('/me').get(authMiddleware, getSingleUser);

//Our DELETE that removes a saved property with its property ID. Handled by the removePorperty function that requires authentication with the authMiddleware function
router.route('/properties/:propertyId').delete(authMiddleware, removeProperty);

// Export the router object
module.exports = router;