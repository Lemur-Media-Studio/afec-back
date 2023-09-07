var express = require('express');
var router = express.Router();

var mainController = require("../controllers/usuariosController")

import {authRequired} from '../middlewares/validateToken'

/* GET home page. */
router.post('/registro', mainController.create);
router.post('/login', mainController.login);
router.post('/logout', mainController.logout);
router.get('/profile', authRequired, mainController.profile)


module.exports = router;