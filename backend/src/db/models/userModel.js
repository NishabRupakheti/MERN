const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required : true,
        unique: true,
        minLength : 3
    },
    password:{
        type:String,
        required: true,
        minLength : 6
    },
})

const User = mongoose.model("User",userSchema)
module.exports = User;