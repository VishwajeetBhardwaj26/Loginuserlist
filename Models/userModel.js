const mongoose = require("mongoose");
const validator= require("validator");
const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
    mobileno: {
        type:Number,
        required: [true, "Please Enter Your Mobile No"],
        maxLength: [10, "Mobile No cannot exceed 10 characters"],
    },
    Date:{
        type:Date,
        default:Date.now()
    },
});
module.exports = mongoose.model("User", userSchema);