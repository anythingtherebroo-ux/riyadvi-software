import { useEffect, useState } from "react";



function Blog(){


const [blogs,setBlogs] = useState([]);

const [loading,setLoading] = useState(true);





useEffect(()=>{


fetchBlogs();


},[]);





const fetchBlogs = async()=>{


try{


const response =
await fetch(

"http://localhost:5000/api/blogs"

);



const data =
await response.json();



if(data.success){

setBlogs(data.data);

}



}catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};





return(


<div className="
min-h-screen
bg-slate-950
py-20
px-6
">



<div className="
max-w-7xl
mx-auto
">


<h1 className="
text-5xl
font-bold
text-white
text-center
mb-12
">

Latest Blogs

</h1>





{

loading ? (

<p className="
text-white
text-center
text-xl
">

Loading blogs...

</p>


) : (



blogs.length === 0 ? (


<p className="
text-gray-300
text-center
">

No blogs available

</p>


) : (



<div className="
grid
md:grid-cols-3
gap-8
">


{

blogs.map((blog)=>(


<div

key={blog._id}

className="
bg-white
rounded-2xl
overflow-hidden
shadow-xl
hover:-translate-y-2
transition
"



>



{

blog.image && (


<img

src={blog.image}

alt={blog.title}

className="
w-full
h-52
object-cover
"

/>


)

}




<div className="
p-6
">



<h2 className="
text-2xl
font-bold
text-gray-900
mb-3
">

{blog.title}

</h2>




<p className="
text-blue-600
font-medium
mb-3
">

By {blog.author}

</p>





<p className="
text-gray-700
line-clamp-4
">

{blog.content}

</p>




<p className="
text-sm
text-gray-500
mt-5
">

{
new Date(
blog.createdAt
).toLocaleDateString()
}

</p>



</div>



</div>


))


}



</div>


)


)



}



</div>



</div>


);


}


export default Blog;