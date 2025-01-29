import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {title, id, price, image} = product;
    return (
        <div className="card bg-base-100  shadow-xl max-w-64 hover:scale-105 duration-500">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt={`image for the product ${title}`}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>Price: &#36; {price} </p>
    <div className="card-actions">
      <Link to={`/details/${id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Product;