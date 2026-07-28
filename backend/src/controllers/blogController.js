const Blog = require("../models/Blog");


// CREATE BLOG

const createBlog = async(req,res)=>{

try{


const blog = await Blog.create({

title:req.body.title,

slug:req.body.slug,

content:req.body.content,

author:req.body.author,

image:req.body.image

});


res.status(201).json({

success:true,

message:"Blog created successfully",

data:blog

});


}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};





// GET BLOGS

const getBlogs = async(req,res)=>{

try{


const blogs =
await Blog.find()
.sort({
createdAt:-1
});


res.json({

success:true,

data:blogs

});


}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};





// GET SINGLE BLOG

const getBlogById = async(req,res)=>{


try{


const blog =
await Blog.findById(
req.params.id
);


if(!blog){

return res.status(404).json({

success:false,

message:"Blog not found"

});

}


res.json({

success:true,

data:blog

});


}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};





// UPDATE BLOG

const updateBlog = async(req,res)=>{


try{


const blog =
await Blog.findByIdAndUpdate(

req.params.id,

{

title:req.body.title,

slug:req.body.slug,

content:req.body.content,

author:req.body.author,

image:req.body.image

},

{
new:true
}

);



if(!blog){

return res.status(404).json({

success:false,

message:"Blog not found"

});

}



res.json({

success:true,

message:"Blog updated successfully",

data:blog

});


}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}


};





// DELETE BLOG

const deleteBlog = async(req,res)=>{


try{


const blog =
await Blog.findById(
req.params.id
);



if(!blog){

return res.status(404).json({

success:false,

message:"Blog not found"

});

}



await blog.deleteOne();



res.json({

success:true,

message:"Blog deleted successfully"

});



}catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};




module.exports={

createBlog,

getBlogs,

getBlogById,

updateBlog,

deleteBlog

};