var express = require('express');
var router = express.Router();

var profileController = require("../controllers/profileController")

/* GET home page. */
router.get('/', profileController.getAll);
router.post('/', profileController.create);

module.exports = router;