const router = require('express').Router();

const {
    createUser,
    getSingleUser,
    login,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser)

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/login').post(login);

module.exports = router;