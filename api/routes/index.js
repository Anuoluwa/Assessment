const router = require('express').Router();
const planServer = require('../controllers');

router.post('/calculate', planServer);

module.exports = router;
