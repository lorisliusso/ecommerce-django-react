import Product from "../Product"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getListProductsFromApi } from "../../actions/productActions"

const Home = () => {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    useEffect(() => {

        dispatch(getListProductsFromApi())

    }, [])

    console.log(products)


    return (

        <div className="px-10">
            <h1 className="text-3xl mt-5 mb-8">LATEST PRODUCTS</h1>

            <section className="grid grid-cols-4">

                {products.map(product => {

                    return (
                        <Product key={product._id} product_id={product._id} name={product.name}
                            image={product.image} description={product.description}
                            rating={product.rating} numReviews={product.numReviews} />
                    )
                })
                }

            </section>
        </div>
    )
}

export default Home


