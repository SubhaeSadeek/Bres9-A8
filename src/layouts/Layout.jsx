import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
const Layout = () => {
    return (
        <div className="bg-[#F6F6F6]">
                {/* navbar  */}
                <Navbar></Navbar>
                {/* main */}
                <div className="w-10/12  mx-auto min-h-dvh">
                <Outlet></Outlet>
                </div>
                {/* footer */}
                <Footer></Footer>
        </div>
    );
};

export default Layout;