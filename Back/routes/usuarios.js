var express = require('express');
var router = express.Router();

var mainController = require("../controllers/usuariosController")


/* GET home page. */
router.post('/registro', mainController.create);
router.post('/login', mainController.login);
router.post('/logout', mainController.logout);
router.get('/profile', mainController.authRequired, mainController.profile)


module.exports = router;