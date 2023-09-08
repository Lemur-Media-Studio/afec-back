const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema;

const MainSchema = new Schema({
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

MainSchema.set('toJSON',{getters:true,virtuals:true})
MainSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model('answersC1',MainSchema)