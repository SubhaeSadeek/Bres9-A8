import { useState } from "react";
import Product from "../Product/Product";
import Sidemenu from "../Sidemenu/Sidemenu";

const AllProducts = ({allProductsData, updateTotal}) => {
    const [category, setCategory] = useState(allProductsData);
    
    const handleCategory = (prodCat) =>{
        if(prodCat === ""){
            setCategory([])
        }
         if(prodCat === 'all'){
            setCategory(allProductsData)
        }
        else {
            const categoryProduct = allProductsData.filter((product) => product.category === prodCat);
            setCategory(categoryProduct);
          }
    }
    
    return (
        <div className="flex gap-3 mb-12">
          {
            category.length > 0 ? <>
              <div>
                <Sidemenu handleCategory={handleCategory}></Sidemenu>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {
                category.map((product) => <Product key={product.id} product={product} updateTotal={updateTotal}></Product>)
            }
        </div>
            </> : 
            <>
            <div>
                <Sidemenu handleCategory={handleCategory}></Sidemenu>
            </div>
                <div className="content-center ">
                <h1 className="text-5xl font-extrabold text-themeText">No avaialvle data found</h1>
                </div>
            </>
          }
        </div>
    );
};

export default AllProducts;