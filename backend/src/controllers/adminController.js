const Admin = require("../models/Admin");
const Contact = require("../models/Contact");
const Career = require("../models/Career");
const Newsletter = require("../models/Newsletter");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// REGISTER ADMIN

const registerAdmin = async(req,res)=>{

try{

const {
name,
email,
password
}=req.body;


const exists = await Admin.findOne({
email
});


if(exists){

return res.status(400).json({

success:false,
message:"Admin already exists"

});

}


const hashedPassword =
await bcrypt.hash(password,10);



const admin = await Admin.create({

name,
email,
password:hashedPassword

});


res.status(201).json({

success:true,
message:"Admin created",
admin

});


}catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};




// LOGIN ADMIN

const loginAdmin = async(req,res)=>{


try{


const {
email,
password
}=req.body;



const admin =
await Admin.findOne({
email
});



if(!admin){

return res.status(404).json({

success:false,
message:"Admin not found"

});

}




const match =
await bcrypt.compare(
password,
admin.password
);



if(!match){

return res.status(401).json({

success:false,
message:"Invalid password"

});

}




const token =
jwt.sign(

{
id:admin._id
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);



res.json({

success:true,
token

});



}catch(error){

res.status(500).json({

success:false,
message:error.message

});

}


};




// ADMIN DASHBOARD STATS

const getAdminStats = async(req,res)=>{

try{


const contacts =
await Contact.countDocuments();



const applications =
await Career.countDocuments();



const subscribers =
await Newsletter.countDocuments();



res.json({

success:true,

data:{

contacts,
applications,
subscribers

}

});


}catch(error){


res.status(500).json({

success:false,
message:error.message

});


}


};




module.exports = {

registerAdmin,
loginAdmin,
getAdminStats

};