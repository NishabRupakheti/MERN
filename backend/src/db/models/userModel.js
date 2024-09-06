const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required : true,
        unique: true,
        minLength : 3
    },
    password:{
        type:String,
        required: true,
        minLength : 6,
        maxLength : 20
    },
})

const User = mongoose.model("User",userSchema)
module.exports = User;