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
                const token = jwt.sign({ usuario: usuario },req.app.get('secretKey'), { expiresIn: '1h' })
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

    authRequired: async function (req, res, next) {
        const {token} = req.cookies
        if (!token) return res.status(401).json({message: "no token"})

        jwt.verify(token, req.app.get('secretKey'),function(err,decoded){
            if(err){
              res.json({message:err.message})
            }else{
              console.log(decoded)
              req.body = decoded
            
            }
          })
          next();
        
    },

    profile: async function (req, res, next) {
        console.log(req)
        /*

        const userFound = await mainModel.findById(req.decoded.id)
        if (!userFound) return res.status(400).json({message:"user not found"})

        return res.json({
            id: userFound._id,
            name:userFound.name,
            surname:userFound.surname,
            user:userFound.user,
            password: userFound.password
        })
        */
    }

}