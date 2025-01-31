import { faSortAmountDesc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData } from "react-router-dom";
import { getItemsFromLocalStr } from "../../utils/utils";
import { getWishlistFrmLocalStrg } from "../../utils/wishlistLStorage";


import { useState } from "react";
import Cart from "../../component/Cart/Cart";
import Wishlist from "../../component/Wishlist/Wishlist";
import useTitle from "../../utils/useTitle";

const Dashboard = () => {
    useTitle("Dashboard");
    const activeButtonStyle = "bg-white text-themeText";
    const buttonStyle = "bg-transparent text-white"

    const [isActive, setIsActive] = useState(true);
    const [isSorted, setIsSorted] = useState(false);
    const [sortedCart, setSortedCart] = useState([]);
    const allProductsData = useLoaderData();
    const addedCartProduct = getItemsFromLocalStr();
    const addedWishlist = getWishlistFrmLocalStrg();
    const cartData = allProductsData.filter((product)=> addedCartProduct.includes(product.id));
    const wishlistData = allProductsData.filter((product)=> addedWishlist.includes(product.id));
    // cart total price
    const cartProductsPrices = cartData.map((cartProduct)=> cartProduct.price);
    const cartTotalPrice = cartProductsPrices.reduce((acc, num)=> acc + num, 0);
  

    const handleShow = () => {
        setIsActive(!isActive)
    }

    const handleSortByPrice = () => {
       
        
        const sortedCartData = cartData.sort((a, b)=> b.price - a.price);
        setIsSorted(true)
        setSortedCart(sortedCartData);


    }
    console.log(sortedCart);
   const HandlePuchase = () => {

   }
    
    return (
        <div>
            {/* Sub Banner Section */}
            <div className="hero bg-themeBG pb-32">
                <div className="hero-content w-1/2 text-center text-white">
                    <div className="">
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                            <div className="card-actions justify-center">
                                <button onClick={handleShow} className={`w-28 rounded-badge p-2  border-2 border-white ${isActive ? activeButtonStyle : buttonStyle}`} >Cart</button>   
                                <button onClick={handleShow} className={`w-28 rounded-badge p-2  border-2 border-white ${isActive ? buttonStyle : activeButtonStyle }`}>Wish List</button>
                            </div>
                    </div>
                </div>
            </div>
            
            {/* Cart and wishlist Sectio */}
                              
            {/* *********** Cart ******* */}
            { isActive ? <>
            <div className={`grid grid-cols-1 gap-4 my-4 mx-auto `}>
                {/* cart section heading */}
                <div className="w-2/3 mx-auto flex justify-between">
                    <h1 className="text-2xl font-semibold text-subTitle">Cart</h1>
                    <div className="flex items-center gap-4">
                        <h2  className="text-xl font-semibold text-mainTitle">Total Cost: &#36; {cartTotalPrice}</h2>
                        <button onClick={handleSortByPrice}  className={`rounded-badge px-4 py-2 border border-themeBorder text-themeText font-semibold`} >
                        <span className="mr-2">Sort by Price</span>  
                        <FontAwesomeIcon icon={faSortAmountDesc}></FontAwesomeIcon>    
                        </button>   
                        
                        <button onClick={HandlePuchase}  className={`w-28 rounded-badge p-2 bg-themeBG text-white font-semibold `}>Purchase</button>
                    </div>
                </div>

                {/* cart display section */}
                    
                    {
                        isSorted ?  sortedCart.map((product)=> <Cart key={product.id} product={product}></Cart>):
                        cartData.map((product)=> <Cart key={product.id} product={product}></Cart>)
                    }
                </div>
            </> : <>
             {/* ********* WishList ***** */}

             <div className={`grid grid-cols-1 gap-4 my-4 mx-auto`}>
             <p>wishlist</p>
                {
                        wishlistData.map((product)=> <Wishlist key={product.id} product={product}></Wishlist>)
                    }
                </div>
            </>

            
                
               
            }
        </div>
    );
};

export default Dashboard;