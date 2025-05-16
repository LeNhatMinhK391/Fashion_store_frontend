
const express = require('express');
const router = express.Router();
const sliderController = require('../controllers/sliderController');

router.get('/', sliderController.getAllSliders);


module.exports = router;

