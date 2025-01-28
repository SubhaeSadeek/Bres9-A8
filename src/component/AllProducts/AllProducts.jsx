import { useState } from "react";
import Product from "../Product/Product";
import Sidemenu from "../Sidemenu/Sidemenu";

const AllProducts = ({allProductsData}) => {
    const [category, setCategory] = useState(allProductsData);
    
    const handleCategory = (prodCat) =>{
        if(prodCat === 'all'){
            setCategory(allProductsData)
        }
        else {
            const categoryProduct = allProductsData.filter((product) => product.category === prodCat);
            setCategory(categoryProduct);
          }
    }
    console.log(category);
    return (
        <div className="flex gap-3">
            <div>
                <Sidemenu handleCategory={handleCategory}></Sidemenu>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {
                category.map((product) => <Product key={product.id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default AllProducts;