function getWishlistFrmLocalStrg (){
 const currentWishlistStr = localStorage.getItem("wish-list");
if(currentWishlistStr){
    const currentWishlist = JSON.parse(currentWishlistStr);
    return currentWishlist;
}
else{
    return [];
}
}

function addWishlistToLocalStrg (id){
    const currentWishlist = getWishlistFrmLocalStrg();
    currentWishlist.push(id);
    const newAddedWishlistStr = JSON.stringify(currentWishlist) ;
    return localStorage.setItem("wish-list", newAddedWishlistStr)
}

export { addWishlistToLocalStrg, getWishlistFrmLocalStrg };
