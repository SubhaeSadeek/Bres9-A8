import { useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    
    const {productId} = useParams();
    const allProductsData = useLoaderData();
    const productDetail = allProductsData.find((product)=> product.id === parseInt(productId))
    const {title, image, price, description, specification, availability, } = productDetail;

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    return (
        <div>
            {/* banner section */}
<div className="hero bg-themeBG pb-32">
  <div className="hero-content w-1/2 text-center text-white">
     <div className="">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
     </div>
   </div>
</div>
        
        {/* detail of the product secton  */}
        {/* ***********************************
          ********************************** */}

        <div className="hero w-2/3 bg-white absolute left-56 bottom-5 rounded-xl ">
  <div className="hero-content flex-col lg:flex-row  h-full rounded-xl">
    <div className="h-full content-center">
    <img
      src={image}
      className="max-w-xs max-h-52 rounded-lg" />
    </div>
    <div className="bg-themeBG/5 h-full p-4 rounded-xl">
      <h1 className="text-xl font-bold text-subTitle">{title}</h1>
      <p className="text-priceGRay">Price: &#36; {price}</p>
      {
        availability ? <p className="btn-xs w-20 border border-inStockBrd text-inStockText bg-inStockBG/10 text-center py-1 rounded-badge">In Stock</p> :
        <p className="btn-xs w-32 border border-red-500 text-red-500 bg-red-100 text-center py-1 rounded-badge">Out of Stock</p> 

      }
      
      <p className="text-mainGray">{description}</p>
      <h3 className="text-subTitle font-bold">Specification:</h3>
      
        <ol className="text-mainGray list-decimal pl-10">
            {
                specification.map((item, index) => <li className="pl-1" key={index}>{item}</li>)
            }
        </ol>
        <h3 className="text-subTitle font-bold">Rating:</h3>

            {/* Button for getting cart or wishlist */}

      <div className="flex gap-3 items-center">
        {/* add to cart button */}
      <button className="bg-themeBG text-white text-xl font-bold rounded-badge px-3 py-3 hover:bg-white hover:text-themeText border-2 border-themeBorder flex gap-2 items-center">Add to Cart
      <GiShoppingCart className="text-xl" />
      </button>

      {/* add to  wish list heart button */}
      <button className="p-3 rounded-full text-white hover:text-themeText border-2 bg-themeBG border-themeBorder hover:bg-white">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
</button>

      </div>
    </div>
  </div>
</div>

</div>
    );
};

export default ProductDetails;