
const Cart = ({product}) => {
  
  const {title, description, image, price} = product;

    return (
<div className="card card-side bg-base-100 shadow-xl w-2/3 min-h-28 mx-auto">
  
    <figure className="w-[20%]">
      <img
        className="w-[50%]"
        src={image}
        alt={`image of the product ${title}`} />
    </figure>
    <div className="flex justify-between w-full px-3 py-3 ">
      <div className="">
      <h1 className="text-mainTitle">{title}</h1>
      <p className="text-mainGray">{description}</p>
      <p className="text-subTitle">Price: &#36; {price}</p>
      </div>
      <div className="">
        <button className=" btn btn-circle btn-sm bg-transparent hover:bg-themeBG/50 text-themeText hover:text-white border border-themeBorder ">
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
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
</div>
    );
};

export default Cart;