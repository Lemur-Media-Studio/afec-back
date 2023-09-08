const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema;

const MainSchemaC1 = new Schema({
    id:{
        type: String,
        index: true,
        trim: true
    },
    q1:{
        type: String,
        index: true,
        trim: true
    },
    q2:{
        type: String,
        index: true,
        trim: true
    },
    q3:{
        type: String,
        index: true,
        trim: true
    },

    q4:{
        type: String,
        index: true,
        trim: true
    },

    q5:{
        type: String,
        index: true,
        trim: true
    },

    q6:{
        type: String,
        index: true,
        trim: true
    },

    q7:{
        type: String,
        index: true,
        trim: true
    },

    q8:{
        type: String,
        index: true,
        trim: true
    },
    q9:{
        type: String,
        index: true,
        trim: true
    },


}, {
    timestamps: true
})

MainSchemaC1.set('toJSON',{getters:true,virtuals:true})
MainSchemaC1.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model('answers',MainSchemaC1)