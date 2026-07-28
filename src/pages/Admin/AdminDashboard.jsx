import { useEffect, useState } from "react";


function AdminDashboard(){


const [stats,setStats] = useState({

contacts:0,
applications:0,
subscribers:0

});


useEffect(()=>{

fetchStats();

},[]);



const fetchStats = async()=>{


try{


const token =
localStorage.getItem("adminToken");



const response =
await fetch(

"http://localhost:5000/api/admin/stats",

{

headers:{

Authorization:
`Bearer ${token}`

}

}

);



const data =
await response.json();



if(data.success){

setStats(data.data);

}



}catch(error){

console.log(error);

}


};




return (

<div className="
min-h-screen
bg-slate-950
p-8
">


<h1 className="
text-4xl
font-bold
text-white
">

Riyadvi Admin Dashboard

</h1>


<p className="
text-slate-400
mt-2
">

Website overview

</p>




<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
mt-10
">



<div className="
bg-white
rounded-2xl
p-6
shadow
">

<h2 className="
text-gray-500
">

Contacts

</h2>


<p className="
text-4xl
font-bold
text-blue-600
mt-3
">

{stats.contacts}

</p>

</div>




<div className="
bg-white
rounded-2xl
p-6
shadow
">

<h2 className="
text-gray-500
">

Applications

</h2>


<p className="
text-4xl
font-bold
text-green-600
mt-3
">

{stats.applications}

</p>


</div>




<div className="
bg-white
rounded-2xl
p-6
shadow
">

<h2 className="
text-gray-500
">

Newsletter

</h2>


<p className="
text-4xl
font-bold
text-purple-600
mt-3
">

{stats.subscribers}

</p>


</div>



</div>


</div>

);


}


export default AdminDashboard;