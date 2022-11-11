import { Link } from "react-router-dom"

const Header = () => {


    return (


        <header className="bg-slate-600 w-full text-gray-100 py-9 px-10 flex items-center">

            <nav className="flex space-x-20 items-center">

                <Link to='/'>
                    <h1 className="text-3xl text-white cursor-pointer">PROSHOP</h1>
                </Link>

                <ul className="flex space-x-10 items-center text-xl">
                    <Link to='/cart'><li className="cursor-pointer border border-white p-2">CART</li></Link>
                    <Link to='/login'><li className="cursor-pointer border border-white p-2">LOGIN</li></Link>
                </ul>

            </nav>



        </header>


    )
}

export default Header