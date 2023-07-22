const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema;

const MainSchema = new Schema({
    n:{
        type: String,
        index: true,
        trim: true
    },
    categoria:{
        type: String,
        index: true,
        trim: true
    },
    momento:{
        type: String,
        index: true,
        trim: true
    },
    fase:{
        type: String,
        index: true,
        trim: true
    },
    macro:{
        type: String,
        index: true,
        trim: true
    },
    micro:{
        type: String,
        index: true,
        trim: true
    },
    igualdad:{
        type: String,
        index: true,
        trim: true
    },
    direccion:{
        type: String,
        index: true,
        trim: true
    },
    espacios:{
        type: String,
        index: true,
        trim: true
    },
    img:{
        type: String,
        index: true,
        trim: true
    },
    video:{
        type: String,
        index: true,
        trim: true
    },


})

MainSchema.set('toJSON',{getters:true,virtuals:true})
MainSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model('etiquetas',MainSchema)


