import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StickyCTA from "../components/StickyCTA/StickyCTA";

function MainLayout({ children }) {
  return (
    <div className="bg-[#080808] text-white min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default MainLayout;