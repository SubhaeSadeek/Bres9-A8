function getItemsFromLocalStr(){
 const getProductDataStr = localStorage.getItem("product")
    if(getProductDataStr){
        const getProductData = JSON.parse(getProductDataStr);
        return getProductData;
    }
    else{
        return [];
    }
}

function addItemsFromLocalStr(id){
    const alreadyStoredData = getItemsFromLocalStr();
    if(alreadyStoredData.includes(id)){
        return
    }
    else{
        alreadyStoredData.push(id);
        const addedNewProduct = JSON.stringify(alreadyStoredData);
        return localStorage.setItem("product", addedNewProduct);

    }

}

export { addItemsFromLocalStr, getItemsFromLocalStr };
