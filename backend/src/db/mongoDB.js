const mongoose = require('mongoose')
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI

const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URI)
        console.log("The database is connected")
    }   
    catch(err){
        console.error("Connection refused" , err)
        process.exit(1)
    }
}

module.exports = connectDB