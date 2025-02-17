const mongoose = require("mongoose")
exports.connectMongoose =()=>{
 mongoose.connect("mongodb://localhost:27017/locallpu").then(()=>{
    console.log("connect to db")
 })
}
const userSchema = new mongoose.Schema({
    name:"String",
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:String
})

exports.User = mongoose.model("User",userSchema)