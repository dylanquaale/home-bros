const router = require('express').Router();
const userRoutes = require('./user-routes');
//const Properties = mongoose

router.use('/users', userRoutes);

module.exports = router;