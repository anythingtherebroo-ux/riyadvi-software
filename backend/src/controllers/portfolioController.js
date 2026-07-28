const Portfolio = require("../models/Portfolio");



// CREATE PROJECT

const createPortfolio = async(req,res)=>{


try{


const project = await Portfolio.create({

title:req.body.title,

category:req.body.category,

description:req.body.description,

image:req.body.image,

tech:req.body.tech,

link:req.body.link

});



res.status(201).json({

success:true,

message:"Project created successfully",

data:project

});



}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};





// GET PROJECTS

const getPortfolios = async(req,res)=>{


try{


const projects =
await Portfolio.find()
.sort({
createdAt:-1
});



res.json({

success:true,

data:projects

});



}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};





// GET SINGLE PROJECT

const getPortfolioById = async(req,res)=>{


try{


const project =
await Portfolio.findById(
req.params.id
);



if(!project){


return res.status(404).json({

success:false,

message:"Project not found"

});


}



res.json({

success:true,

data:project

});


}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};





// UPDATE PROJECT

const updatePortfolio = async(req,res)=>{


try{


const project =
await Portfolio.findByIdAndUpdate(

req.params.id,

{

title:req.body.title,

category:req.body.category,

description:req.body.description,

image:req.body.image,

tech:req.body.tech,

link:req.body.link

},

{
new:true
}

);



if(!project){

return res.status(404).json({

success:false,

message:"Project not found"

});

}



res.json({

success:true,

message:"Project updated successfully",

data:project

});


}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};





// DELETE PROJECT

const deletePortfolio = async(req,res)=>{


try{


const project =
await Portfolio.findById(
req.params.id
);



if(!project){


return res.status(404).json({

success:false,

message:"Project not found"

});

}



await project.deleteOne();



res.json({

success:true,

message:"Project deleted successfully"

});


}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};





module.exports={

createPortfolio,

getPortfolios,

getPortfolioById,

updatePortfolio,

deletePortfolio

};