import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e) => {

    e.preventDefault();


    try {

      const response = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );


      const data = await response.json();


      if (data.success) {

        localStorage.setItem(
          "adminToken",
          data.token
        );

        navigate("/admin/dashboard");

      } else {

        alert(data.message);

      }


    } catch (error) {

      console.log(error);
      alert("Server error");

    }

  };


  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-950
      px-4
    ">


      <div className="
        w-full
        max-w-md
        bg-white
        rounded-2xl
        shadow-2xl
        p-8
      ">


        <h1 className="
          text-3xl
          font-bold
          text-center
          text-gray-900
        ">
          Riyadvi Admin
        </h1>


        <p className="
          text-center
          text-gray-600
          mt-2
          mb-8
        ">
          Login to your dashboard
        </p>



        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >


          {/* Email */}

          <div>

            <label className="
              block
              text-sm
              font-medium
              text-gray-800
              mb-2
            ">
              Email Address
            </label>


            <input

              type="email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              placeholder="Enter your email"

              className="
                w-full
                bg-white
                text-gray-900
                placeholder-gray-400
                border
                border-gray-300
                rounded-lg
                px-4
                py-3
                outline-none
                focus:border-blue-600
                focus:ring-2
                focus:ring-blue-200
              "

            />

          </div>



          {/* Password */}

          <div>

            <label className="
              block
              text-sm
              font-medium
              text-gray-800
              mb-2
            ">
              Password
            </label>


            <input

              type="password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              placeholder="Enter your password"

              className="
                w-full
                bg-white
                text-gray-900
                placeholder-gray-400
                border
                border-gray-300
                rounded-lg
                px-4
                py-3
                outline-none
                focus:border-blue-600
                focus:ring-2
                focus:ring-blue-200
              "

            />

          </div>



          <button

            type="submit"

            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              py-3
              rounded-lg
              transition
              duration-300
            "

          >

            Login

          </button>


        </form>


      </div>


    </div>

  );

}


export default AdminLogin;