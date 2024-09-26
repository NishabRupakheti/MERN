const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    userName : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    title:{
        type: String,
        required: true,
        minLength : 3
    },

    message:{
        type: String,
        required : false,
        default : "No message provided",
        minLength : 3
    }
})


const Message = mongoose.model("Message" , messageSchema)
module.exports = Message;