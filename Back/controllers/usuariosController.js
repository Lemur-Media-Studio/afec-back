var mainModel = require("../models/usuariosModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    create: async function (req, res, next) {
        //lANZAR EXCEPCIONES
        try {
            let data = await mainModel.create({ name: req.body.name, surname: req.body.surname, user: req.body.user, password: req.body.password })

            res.status(201).json(data)
        } catch (e) {

            console.log(e)
            next(e)
        }
    },
    login: async function (req, res, next) {
        //Consulto por usuario
        let usuario = await mainModel.findOne({ user: req.body.user })


        if (usuario) {
            //Validar el password
            if (bcrypt.compareSync(req.body.password, usuario.password)) {
                //Password valido , genero token
                const token = jwt.sign({ usuario: usuario }, 'secretKey', { expiresIn: '1h' })
                res.status(201).cookie('token', token)
                res.json(token)

            } else {
                //Password invalido
                res.json({ message: "Password incorrecto", data: null })
            }
        } else {
            //Arrojar error
            res.json({ message: "Usuario no existe", data: null })
        }



    },

    logout: async function (req, res, next) {
        res.cookie("token", "", { expires: new Date(0), });
        return res.sendStatus(200)

    },

    profile: async function (req, res, next) {
        res.send('profile')
    },

    authRequired: async function (req, res, next) {
        console.log("auth required token sucess")
        next()
    }
}