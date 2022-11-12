import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getListProductsDetailsFromApi } from "../../actions/productActions"
import { useNavigate } from "react-router-dom"



const SingleProductPage = () => {

    const navigate = useNavigate()
    const [qty, setQty] = useState(1)

    const params = useParams()
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {

        dispatch(getListProductsDetailsFromApi(params.id))

    }, [])


    //countInStock
    return (


        <div className="p-8 flex flex-col space-y-10 text-xl">

            <Link to='/' className="underline text-3xl">Go Back </Link>

            <article className="flex space-x-10">

                <figure className="">
                    <img src={product.image} alt="" />
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

                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Quantity</label>
                    <div>
                        <p className={product.countInStock > 0 ? 'block' : 'hidden'} ><span className="text-green-600">In stock:</span> {product.countInStock}</p>
                        <p className={product.countInStock === 0 ? 'block' : 'hidden'} ><span className="text-red-600">Out of Stock:</span> {product.countInStock}</p>
                    </div>
                    <input onChange={(e) => setQty(e.target.value)} className="border border-gray-500 p-2" type="number" id="quantity" name="quantity" min="1" max={product.countInStock} value={qty} placeholder="Choose quantity" />

                    <button onClick={() => navigate(`/cart/${params.id}?qty=${qty}`)} disabled={product.countInStock === 0} className=
                        {product.countInStock > 0 ? "bg-black py-2 px-5 text-white text-xl"
                            : "bg-gray-300 py-2 px-5 text-white text-xl"}>ADD TO CART</button>

                </aside>

            </article>

        </div>


    )




}

export default SingleProductPage