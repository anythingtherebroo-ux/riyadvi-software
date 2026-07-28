import { useEffect, useState } from "react";


function Contacts(){


const [contacts,setContacts] = useState([]);

const [loading,setLoading] = useState(true);



useEffect(()=>{

fetchContacts();

},[]);



const fetchContacts = async()=>{


try{


const token =
localStorage.getItem("adminToken");



const response =
await fetch(
"http://localhost:5000/api/contact"
);



const data =
await response.json();



if(data.success){

setContacts(data.data);

}



}catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};





const deleteContact = async(id)=>{


const confirmDelete =
window.confirm(
"Delete this contact?"
);



if(!confirmDelete) return;



try{


const token =
localStorage.getItem("adminToken");



const response =
await fetch(

`http://localhost:5000/api/contact/${id}`,

{

method:"DELETE",

headers:{

Authorization:
`Bearer ${token}`

}

}

);



const data =
await response.json();



if(data.success){


setContacts(

contacts.filter(

(item)=>
item._id !== id

)

);


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
mb-8
">

Contact Messages

</h1>



{
loading ? (

<p className="text-white">
Loading...
</p>


) : (


<div className="
bg-white
rounded-2xl
overflow-x-auto
shadow-xl
">


<table className="w-full">


<thead className="
bg-blue-600
text-white
">


<tr>


<th className="p-4 text-left">
Name
</th>


<th className="p-4 text-left">
Email
</th>


<th className="p-4 text-left">
Phone
</th>


<th className="p-4 text-left">
Service
</th>


<th className="p-4 text-left">
Message
</th>


<th className="p-4 text-left">
Action
</th>


</tr>


</thead>



<tbody>


{
contacts.map((item)=>(


<tr
key={item._id}
className="
border-b
hover:bg-blue-50
"
>


<td className="p-4 text-gray-900">
{item.name}
</td>



<td className="p-4 text-gray-700">
{item.email}
</td>



<td className="p-4 text-gray-700">
{item.phone}
</td>



<td className="p-4 text-blue-600">
{item.service}
</td>



<td className="p-4 text-gray-700">
{item.message}
</td>



<td className="p-4">


<button

onClick={()=>deleteContact(item._id)}

className="
bg-red-600
text-white
px-4
py-2
rounded-lg
hover:bg-red-700
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


export default Contacts;