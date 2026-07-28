import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateBlog() {


  const navigate = useNavigate();


  const [form, setForm] = useState({

    title: "",
    slug: "",
    content: "",
    author: "",
    image: ""

  });



  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };




  const handleSubmit = async (e) => {

    e.preventDefault();


    try {


      const response = await fetch(

        "http://localhost:5000/api/blogs",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },

          body: JSON.stringify(form)

        }

      );



      const data = await response.json();



      if (data.success) {


        alert("Blog created successfully");


        navigate("/admin/blogs");


      }



    } catch (error) {


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

        Create Blog

      </h1>





      <form

        onSubmit={handleSubmit}

        className="
          bg-white
          rounded-2xl
          p-8
          space-y-5
          max-w-3xl
          shadow-xl
        "

      >



        <input

          name="title"

          value={form.title}

          onChange={handleChange}

          placeholder="Blog title"

          className="
            w-full
            p-3
            border
            rounded-lg
            text-gray-900
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
          "

        />





        <input

          name="slug"

          value={form.slug}

          onChange={handleChange}

          placeholder="Blog slug"

          className="
            w-full
            p-3
            border
            rounded-lg
            text-gray-900
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
          "

        />





        <input

          name="author"

          value={form.author}

          onChange={handleChange}

          placeholder="Author"

          className="
            w-full
            p-3
            border
            rounded-lg
            text-gray-900
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
          "

        />





        <input

          name="image"

          value={form.image}

          onChange={handleChange}

          placeholder="Image URL"

          className="
            w-full
            p-3
            border
            rounded-lg
            text-gray-900
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
          "

        />





        <textarea

          name="content"

          value={form.content}

          onChange={handleChange}

          placeholder="Blog content"

          rows="8"

          className="
            w-full
            p-3
            border
            rounded-lg
            text-gray-900
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
          "

        />





        <button

          type="submit"

          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            font-semibold
            hover:bg-blue-700
            transition
          "

        >

          Create Blog

        </button>



      </form>



    </div>


  );


}


export default CreateBlog;