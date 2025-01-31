import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { StorageContext } from "../StorageContext/StorageContext";


const Navbar = () => {
      const {pathname} = useLocation();
      
      const {cardListTotal, wishListTotal} = useContext(StorageContext);
 
    const menuLink = <>
        <li><NavLink 
        to="/"
        className={({isActive})=>
        isActive ? "text-yellow-500 font-bold" : ""
        }
        >
        Home
        </NavLink></li>
        
        <li><NavLink 
        to="/statistics"
        className={({isActive})=>
        isActive ? "text-yellow-500 font-bold" : ""
        }
        >
        Statistics
        </NavLink></li>
        
        <li><NavLink 
        to="/dashboard"
        className={({isActive})=>
        isActive ? "text-yellow-500 font-bold" : ""
        }
        >
        Dashboard
        </NavLink></li>
        <li><NavLink 
        to={"profile"}
        className={({isActive}) =>
        isActive ? "text-yellow-500 font-bold" : ""
        }
        >
        User Profile
        </NavLink></li>
    </>
    
    return (
      <div className={`navbar ${pathname === "/" ? "bg-themeBG text-white" : "bg-white"} px-16`}>
      <div className=" navbar-start justify-between lg:justify-normal">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {menuLink}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold cursor-pointer hover:scale-110  hover:bg-white/30 hover:p-2 hover:rounded-badge duration-500 ">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-10 px-1">
          {menuLink}
        </ul>
      </div>
      <div className="navbar-end gap-4">
      
      <div className="indicator">
      <span className="indicator-item badge badge-secondary">{cardListTotal}</span>
      <GiShoppingCart className="text-xl md:text-3xl rounded-full border border-themeBorder" />
      </div>
      
      <div className="indicator">
      <span className="indicator-item badge badge-primary">{wishListTotal}</span>
      <CiHeart className="text-xl md:text-3xl rounded-full border border-themeBorder" />
      </div>
      </div>
    </div>
    );
};

export default Navbar;