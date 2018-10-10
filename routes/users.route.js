const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users.controller')

router.get('/', ctrl.fetchUsers);

module.exports = router;