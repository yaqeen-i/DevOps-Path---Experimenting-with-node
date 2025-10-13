const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

router.get('/users', getUsers);
router.post('/users', createUser);

router.get('/users/ping', (req, res) => res.json({ message: 'Auth API is alive!' }));

module.exports = router;
