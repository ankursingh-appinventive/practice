const express = require('express');
const createValidator = require('../middleware/validator');
const {home,getSum,getSub,getMul,getDiv,getMod,getSqr} = require('../controllers/logic')
const router = express.Router();

router.route("/").get(home);
router.route('/add').post(createValidator,getSum);
router.post('/sub',createValidator,getSub);
router.post('/mul',createValidator,getMul);
router.post('/div',createValidator,getDiv);
router.post('/mod',createValidator,getMod);
router.post('/sqr',createValidator,getSqr);

module.exports = router