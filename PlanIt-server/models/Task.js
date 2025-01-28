const mongoose = require('mongoose')
const { Schema } = mongoose;

const taskSchema = new Schema ( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag : {
        type: String,
        default: "General"
    },
    completed: {
        type: Boolean,
        default: false
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('task', taskSchema)