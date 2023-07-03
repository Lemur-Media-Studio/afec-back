const mongoose = require('../bin/mongodb')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

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
    }),
    validate({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'Name should contain alpha-numeric characters only'
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
        required: true
    }
})
MainSchema.pre('save',function(next){
    console.log(this.password)
    this.password = bcrypt.hashSync(this.password,10);
    next();
})
module.exports = mongoose.model('usuarios',MainSchema)
