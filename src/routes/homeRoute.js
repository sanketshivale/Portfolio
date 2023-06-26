const express = require('express');
const router = express.Router();
const {getHome} = require('../controllers/homeCtrl')

router.get('/', getHome)

module.exports = router;