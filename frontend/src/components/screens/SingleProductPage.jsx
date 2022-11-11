import { Link, useParams } from "react-router-dom"
import { products } from "../resources/product"


const SingleProductPage = () => {

    const params = useParams()

    const product = products.find(p => p._id === params.id)


    return (


        <div className="p-8 flex flex-col space-y-10 text-xl">

            <Link to='/' className="underline text-3xl">Go Back </Link>

            <article className="flex space-x-10">

                <figure className="">
                    <img src={"." + product.image} alt="" />
                </figure>

                <section className="flex flex-col space-y-5 w-60 ">

                    <h2 className="text-3xl font-bold">{product.name}</h2>

                    <p><span className="font-bold">{product.rating} </span>from {product.numReviews} reviews</p>

                    <p>Price: ${product.price}</p>

                    <p className="">Description: {product.description}</p>


                </section>

                <aside className="border p-5 flex flex-col space-y-5 h-fit">


                    <p>Price: <span className="ml-5 font-semibold">{product.price}</span></p>

                    <p>Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>

                    <button disabled={product.countInStock === 0} className=
                        {product.countInStock > 0 ? "bg-black py-2 px-5 text-white text-xl" : "bg-gray-300 py-2 px-5 text-white text-xl"}>ADD TO CART</button>

                </aside>

            </article>

        </div>


    )




}

export default SingleProductPage