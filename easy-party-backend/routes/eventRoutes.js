const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/addEvent', eventController.addEvent);

module.exports = router;
