// Here is our Express Router. The 
const router = require('express').Router();

// User-related functionality routes created through the express module
const userRoutes = require('./user-routes');

// Any requests to '/users' will be handled by the route handlers defined in the 'userRoutes' module.
router.use('/users', userRoutes);

// Router instance is exported here.
module.exports = router;