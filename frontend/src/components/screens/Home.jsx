import { products } from "../resources/product"
import Product from "../Product"

export const Home = () => {

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


