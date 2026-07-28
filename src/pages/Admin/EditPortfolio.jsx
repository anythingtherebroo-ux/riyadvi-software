import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditPortfolio(){


const { id } = useParams();

const navigate = useNavigate();



const [form,setForm] = useState({

title:"",
category:"",
description:"",
image:"",
tech:"",
link:""

});





useEffect(()=>{

loadProject();

},[]);





const loadProject = async()=>{


try{


const response =
await fetch(

`http://localhost:5000/api/portfolio/${id}`

);



const data =
await response.json();



if(data.success){

setForm(data.data);

}



}catch(error){

console.log(error);

}


};






const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};






const updateProject = async(e)=>{


e.preventDefault();



try{


const response =
await fetch(

`http://localhost:5000/api/portfolio/${id}`,

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


alert("Project updated successfully");


navigate("/admin/portfolio");


}



}catch(error){

console.log(error);

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

Edit Project

</h1>





<form

onSubmit={updateProject}

className="
bg-white
rounded-2xl
p-8
max-w-3xl
space-y-5
shadow-xl
"

>



{

["title","category","image","tech","link"].map((field)=>(


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
focus:ring-2
focus:ring-blue-600
"

/>


))


}





<textarea

name="description"

value={form.description}

onChange={handleChange}

placeholder="Description"

rows="6"

className="
w-full
p-3
border
rounded-lg
text-gray-900
placeholder-gray-400
"

/>




<button

className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
font-semibold
hover:bg-blue-700
"

>

Update Project

</button>



</form>



</div>


);


}


export default EditPortfolio;