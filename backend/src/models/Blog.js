const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({

title:{
type:String,
required:true
},


slug:{
type:String,
required:true,
unique:true
},


content:{
type:String,
required:true
},


author:{
type:String,
default:"Riyadvi"
},


image:{
type:String,
default:""
}


},
{
timestamps:true
});


module.exports =
mongoose.model(
"Blog",
blogSchema
);