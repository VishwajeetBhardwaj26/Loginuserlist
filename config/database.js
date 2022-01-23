const mongoose = require("mongoose");

const database=( )=>{
    mongoose.connect(process.env.uri
    ,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((data)=>{
    console.log(`mongodb connected to the server:${data.connection.host}`);
})
}
module.exports=database;