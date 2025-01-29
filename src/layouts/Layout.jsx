import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
const Layout = () => {
    return (
        <div className="bg-[#F6F6F6] container mx-auto">
                {/* navbar  */}
                <Navbar></Navbar>
                {/* main */}
                <div className="min-h-dvh">
                <Outlet></Outlet>
                </div>
                {/* footer */}
                <Footer></Footer>
        </div>
    );
};

export default Layout;