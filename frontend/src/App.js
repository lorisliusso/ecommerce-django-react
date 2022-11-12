import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/screens/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleProductPage from "./components/screens/SingleProductPage";
import Cart from "./components/screens/Cart";

function App() {

  return (
    <Router>

    <div className="App">

      <Header />

      <main className="">

      <Routes>

<Route path='/' element={<Home />} />
<Route path='/product/:id' element={<SingleProductPage />} />
<Route path='/cart/:id/' element={<Cart />} />
<Route path='/cart/:id?/' element={<Cart />} />


</Routes>
     
      </main>

      <Footer/>


    </div>

    </Router>
  );
}

export default App;
