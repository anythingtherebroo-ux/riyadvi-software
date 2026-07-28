
import { Routes, Route } from "react-router-dom";


// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";


// Admin Pages
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Contacts from "../pages/Admin/Contacts";
import Applications from "../pages/Admin/Applications";
import Newsletter from "../pages/Admin/Newsletter";


// Blog CMS
import Blogs from "../pages/Admin/Blogs";
import CreateBlog from "../pages/Admin/CreateBlog";
import EditBlog from "../pages/Admin/EditBlog";


// Portfolio CMS
import Portfolios from "../pages/Admin/Portfolios";
import CreatePortfolio from "../pages/Admin/CreatePortfolio";
import EditPortfolio from "../pages/Admin/EditPortfolio";


// Layout & Protection
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute";



function AppRoutes() {

  return (

    <Routes>


      {/* Public Website */}


      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/careers" element={<Careers />} />

      <Route path="/contact" element={<Contact />} />




      {/* Admin Login */}


      <Route path="/admin" element={<AdminLogin />} />




      {/* Protected Admin */}


      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >


        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />


        <Route
          path="/admin/contacts"
          element={<Contacts />}
        />


        <Route
          path="/admin/applications"
          element={<Applications />}
        />


        <Route
          path="/admin/newsletter"
          element={<Newsletter />}
        />


        <Route
          path="/admin/blogs"
          element={<Blogs />}
        />


        <Route
          path="/admin/blogs/create"
          element={<CreateBlog />}
        />


        <Route
          path="/admin/blogs/edit/:id"
          element={<EditBlog />}
        />


        <Route
          path="/admin/portfolio"
          element={<Portfolios />}
        />


        <Route
          path="/admin/portfolio/create"
          element={<CreatePortfolio />}
        />


        <Route
          path="/admin/portfolio/edit/:id"
          element={<EditPortfolio />}
        />


      </Route>


    </Routes>

  );

}


export default AppRoutes;

