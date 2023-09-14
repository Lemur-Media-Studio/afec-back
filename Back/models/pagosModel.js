const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema;

const MainSchema = new Schema({
    source:{
        type: String,
        index: true,
        trim: true
    },
    amount:{
        type: String,
        index: true,
        trim: true
    }
    



})

MainSchema.set('toJSON',{getters:true,virtuals:true})
MainSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model('pagos',MainSchema)