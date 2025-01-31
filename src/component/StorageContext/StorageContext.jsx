import { createContext, useEffect, useState } from "react";
import { getItemsFromLocalStr } from "../../utils/utils";
import { getWishlistFrmLocalStrg } from "../../utils/wishlistLStorage";

export const StorageContext = createContext();

export const StorageContextProvider = ({children}) => {
    const [cardListTotal, setCardListTotal] = useState(0);
    const [wishListTotal, setWishListTotal] = useState(0);
   
    const updateTotal = () =>{
        const cardList = getItemsFromLocalStr();
        const wishlist = getWishlistFrmLocalStrg();
        setCardListTotal(cardList.length);
        setWishListTotal(wishlist.length);          

    }
  
    useEffect(()=>{
        updateTotal();

        const handleStorageChange = () => updateTotal();
        window.addEventListener("storage", handleStorageChange);
        
        return () => window.removeEventListener("storage", handleStorageChange)
    }, []);

    return (
        <StorageContext.Provider value={{cardListTotal, wishListTotal, updateTotal}}>
            {children}
        </StorageContext.Provider>
    )

};