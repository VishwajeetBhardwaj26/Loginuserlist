const express =  require("express");
const app = express();
app.use(express.json());
//importing Route
const user =require("./Routes/userRoute");
app.use("/api/v1",user);
module.exports=app;