import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Portfolios(){

const navigate = useNavigate();

const [projects,setProjects] = useState([]);

const [loading,setLoading] = useState(true);



useEffect(()=>{

fetchProjects();

},[]);



const fetchProjects = async()=>{


try{


const response =
await fetch(
"http://localhost:5000/api/portfolio"
);



const data =
await response.json();



if(data.success){

setProjects(data.data);

}



}catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};





const deleteProject = async(id)=>{


const confirmDelete =
window.confirm(
"Delete this project?"
);



if(!confirmDelete)
return;



try{


const response =
await fetch(

`http://localhost:5000/api/portfolio/${id}`,

{

method:"DELETE"

}

);



const data =
await response.json();



if(data.success){


setProjects(

projects.filter(

(project)=>
project._id !== id

)

);


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


<div className="
flex
justify-between
items-center
mb-8
">


<h1 className="
text-4xl
font-bold
text-white
">

Portfolio Management

</h1>



<button

onClick={()=>navigate("/admin/portfolio/create")}

className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
font-semibold
"

>

Create Project

</button>


</div>





{
loading ? (

<p className="text-white">
Loading...
</p>


):(



<div className="
bg-white
rounded-2xl
shadow-xl
overflow-x-auto
">


<table className="
w-full
text-left
">


<thead className="
bg-blue-600
text-white
">


<tr>

<th className="p-4">
Title
</th>


<th className="p-4">
Category
</th>


<th className="p-4">
Technology
</th>


<th className="p-4">
Action
</th>


</tr>


</thead>





<tbody>


{

projects.map((project)=>(


<tr

key={project._id}

className="
border-b
hover:bg-blue-50
"

>


<td className="
p-4
text-gray-900
font-semibold
">

{project.title}

</td>



<td className="
p-4
text-gray-700
">

{project.category}

</td>



<td className="
p-4
text-gray-700
">

{project.tech}

</td>




<td className="p-4">


<button

onClick={()=>navigate(
`/admin/portfolio/edit/${project._id}`
)}

className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
mr-3
"

>

Edit

</button>



<button

onClick={()=>deleteProject(project._id)}

className="
bg-red-600
text-white
px-4
py-2
rounded-lg
"

>

Delete

</button>


</td>



</tr>


))


}



</tbody>


</table>


</div>


)

}



</div>


);


}


export default Portfolios;