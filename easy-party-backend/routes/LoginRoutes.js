const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Rota para lidar com a verificação de dados de login
router.post('/check', loginController.checkLogin);

module.exports = router;
