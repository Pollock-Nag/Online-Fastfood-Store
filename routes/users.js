const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.post('/api/alreadyExist', userController.alreadyExistUsers);
router.post('/api/insert', userController.insertUsers);
router.post('/api/signin', userController.signinUsers);


module.exports = router;