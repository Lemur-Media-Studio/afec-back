const mongoose = require('../bin/mongodb')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
var validate = require('mongoose-validator');

var nameValidator = [
    validate({
      validator: 'isLength',
      arguments: [3, 20],
      message: 'Name should be between 3 and 50 characters'
    }),
    validate({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'Name should contain alpha-numeric characters only'
    })
  ];

  var surnameValidator = [
    validate({
      validator: 'isLength',
      arguments: [3, 20],
      message: 'Name should be between 3 and 50 characters'
    })
  ];

  var passwordValidator = [
    validate({
      validator: 'isLength',
      arguments: [6, 20],
      message: 'Password should be between 6 and 20 characters'
    })
  ];

const MainSchema = new Schema({
    name:{
        type: String,
        trim: true,
        validate:nameValidator
    },
    surname:{
        type: String,
        trim: true,
        validate:surnameValidator
    },
    user:{
        type: String,
        unique: true,
        required: [true,"El campo usuario es obligatorio"],
        maxLength: 20 [true, "El apellido no debe superar los 20 caracteres"]
    },
    password:{
        type: String,
        required: true,
        validate:passwordValidator
    }
})
MainSchema.pre('save',function(next){
    console.log(this.password)
    this.password = bcrypt.hashSync(this.password,10);
    next();
})
module.exports = mongoose.model('usuarios',MainSchema)
