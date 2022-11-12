import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useLocation, useParams } from "react-router-dom"
import { addToCart } from "../../actions/cartActions"

const Cart = () => {

    const location = useLocation()
    const params = useParams()
    const productId = params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;
    console.log(cart)

    useEffect(() => {

        if (productId) {
            dispatch(addToCart(productId, qty))

        }


    }, [dispatch, productId, qty])


    return (

        <div>Cart</div>

    )

}

export default Cart