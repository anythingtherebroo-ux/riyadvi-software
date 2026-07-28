import { useEffect, useState } from "react";


function Newsletter(){


const [subscribers,setSubscribers] = useState([]);

const [loading,setLoading] = useState(true);




useEffect(()=>{

fetchSubscribers();

},[]);





const fetchSubscribers = async()=>{


try{


const response =
await fetch(
"http://localhost:5000/api/newsletter"
);



const data =
await response.json();



if(data.success){

setSubscribers(data.data);

}



}catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};






const deleteSubscriber = async(id)=>{


const confirmDelete =
window.confirm(
"Delete this subscriber?"
);



if(!confirmDelete)
return;



try{


const token =
localStorage.getItem(
"adminToken"
);



const response =
await fetch(

`http://localhost:5000/api/newsletter/${id}`,

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


setSubscribers(

subscribers.filter(

(item)=>
item._id !== id

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


<h1 className="
text-4xl
font-bold
text-white
mb-8
">

Newsletter Subscribers

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
shadow-xl
overflow-hidden
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
Email
</th>


<th className="p-4">
Date
</th>


<th className="p-4">
Action
</th>


</tr>


</thead>





<tbody>



{

subscribers.map((item)=>(


<tr

key={item._id}

className="
border-b
hover:bg-blue-50
"

>


<td className="
p-4
text-gray-900
">

{item.email}

</td>




<td className="
p-4
text-gray-700
">

{
new Date(
item.createdAt
).toLocaleDateString()
}

</td>





<td className="p-4">


<button

onClick={()=>deleteSubscriber(item._id)}

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


export default Newsletter;