import { Link, Outlet, useNavigate } from "react-router-dom";


function AdminLayout(){

  const navigate = useNavigate();


  const logout = () => {

    localStorage.removeItem("adminToken");

    navigate("/admin");

  };


  return (

    <div className="
      min-h-screen
      flex
      bg-slate-950
    ">


      {/* Sidebar */}

      <aside className="
        w-64
        bg-white
        shadow-xl
        p-6
      ">


        <h1 className="
          text-2xl
          font-bold
          text-blue-600
          mb-8
        ">
          Riyadvi Admin
        </h1>


        <nav className="
          space-y-4
        ">


          <Link
            to="/admin/dashboard"
            className="
              block
              text-gray-700
              hover:text-blue-600
              font-medium
            "
          >
            Dashboard
          </Link>


          <Link
            to="/admin/contacts"
            className="
              block
              text-gray-700
              hover:text-blue-600
              font-medium
            "
          >
            Contacts
          </Link>


          <Link
            to="/admin/applications"
            className="
              block
              text-gray-700
              hover:text-blue-600
              font-medium
            "
          >
            Applications
          </Link>


          <Link
            to="/admin/newsletter"
            className="
              block
              text-gray-700
              hover:text-blue-600
              font-medium
            "
          >
            Newsletter
          </Link>


          <button
            onClick={logout}
            className="
              mt-8
              text-red-600
              font-semibold
            "
          >
            Logout
          </button>


        </nav>


      </aside>



      {/* Page Content */}

      <main className="
        flex-1
        p-8
      ">

        <Outlet />

      </main>


    </div>

  );

}


export default AdminLayout;