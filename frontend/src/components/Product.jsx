import { Link } from "react-router-dom"

const Product = ({ product_id, name, image, description, rating, numReviews }) => {

    return (




        <div className="flex flex-col space-y-5 p-4 border">

            <Link to={`/product/${product_id}`}>
                <img src={image} alt="article" />
            </Link>

            <Link to={`/product/${product_id}`}>
                <h2>{name}</h2>
            </Link>

            <p><span className="font-bold">{rating} </span>from {numReviews} reviews</p>




        </div >




    )




}

export default Product
