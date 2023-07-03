const mongoose = require('../bin/mongodb')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const MainSchema = new Schema({
    name:{
        type: String,
        trim: true,
        maxLength: 20 [true, "El nombre no debe superar los 20 caracteres"]
    },
    surname:{
        type: String,
        trim: true,
        maxLength: 20 [true, "El apellido no debe superar los 20 caracteres"]
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
