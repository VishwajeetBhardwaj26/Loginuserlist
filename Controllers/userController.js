const User= require("../Models/userModel");
const catchAsyncError=require("../Middleware/asyncError");
//Registering a user
exports.registerUser = catchAsyncError((req,res,next)=>{
    const {name,mobileno}= req.body;
    const user = User.create({
        name,
        mobileno,
    });
    res.status(200).json({
        success:true,
        user,
    })
});
//get all users
exports.getAllUser = catchAsyncError(async(req,res,next)=>{
    const users= await User.find();
    res.status(200).json({
        success:true,
        users,
    });
});