import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";


function EditBlog(){


const {id}=useParams();

const navigate=useNavigate();


const [form,setForm]=useState({

title:"",
slug:"",
content:"",
author:"",
image:""

});



useEffect(()=>{

loadBlog();

},[]);




const loadBlog=async()=>{


const response =
await fetch(
`http://localhost:5000/api/blogs/${id}`
);


const data =
await response.json();


if(data.success){

setForm(data.data);

}


};





const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const handleSubmit=async(e)=>{


e.preventDefault();



const response =
await fetch(

`http://localhost:5000/api/blogs/${id}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(form)

}

);



const data =
await response.json();



if(data.success){

alert("Blog updated");

navigate("/admin/blogs");

}


};





return(

<div className="
min-h-screen
bg-slate-950
p-8
">


<h1 className="
text-4xl
font-bold
text-white
mb-8
">

Edit Blog

</h1>



<form

onSubmit={handleSubmit}

className="
bg-white
p-8
rounded-2xl
space-y-5
max-w-3xl
"

>


{["title","slug","author","image"].map((field)=>(


<input

key={field}

name={field}

value={form[field]}

onChange={handleChange}

placeholder={field}

className="
w-full
p-3
border
rounded-lg
text-gray-900
placeholder-gray-400
"

/>


))}



<textarea

name="content"

value={form.content}

onChange={handleChange}

rows="8"

placeholder="content"

className="
w-full
p-3
border
rounded-lg
text-gray-900
"

/>



<button

className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
"

>

Update Blog

</button>


</form>



</div>

);


}


export default EditBlog;