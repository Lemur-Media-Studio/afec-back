const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema;

const MainSchema = new Schema({
    id:{
        type: String,
        index: true,
        trim: true
    },
    idPrice:{
        type: String,
        index: true,
        trim: true
    },
    idSub:{
        type: String,
        index: true,
        trim: true
    },
    refUser:{
        type: String,
        index: true,
        trim: true
    },
    linkIn:{
        type: String,
        index: true,
        trim: true
    },




}, {
    timestamps: true
})

MainSchema.set('toJSON',{getters:true,virtuals:true})
MainSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model('pagos',MainSchema)