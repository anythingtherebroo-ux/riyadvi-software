import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreatePortfolio(){


const navigate = useNavigate();


const [form,setForm] = useState({

title:"",
category:"",
description:"",
image:"",
tech:"",
link:""

});



const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};



const submit = async(e)=>{

e.preventDefault();



const response =
await fetch(

"http://localhost:5000/api/portfolio",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(form)

}

);



const data =
await response.json();



if(data.success){

alert("Project created");

navigate("/admin/portfolio");

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

Create Project

</h1>



<form

onSubmit={submit}

className="
bg-white
p-8
rounded-2xl
max-w-3xl
space-y-5
"

>


{

["title","category","image","tech","link"].map((field)=>(


<input

key={field}

name={field}

placeholder={field}

value={form[field]}

onChange={handleChange}

className="
w-full
p-3
border
rounded-lg
text-gray-900
placeholder-gray-400
"

/>


))

}




<textarea

name="description"

placeholder="Description"

value={form.description}

onChange={handleChange}

rows="6"

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

Create

</button>


</form>



</div>

);


}


export default CreatePortfolio;