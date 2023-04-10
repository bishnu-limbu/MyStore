import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
// import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Cart from "./pages/Cart";
import Registeration from "./pages/Registeration";

const App = () => {
  return(
        <Router>
            <Routes>
            <Route exact path="/"
               element = {<Home/>}/>
               <Route exact path="/home"
               element = {<Home/>}/>
              <Route exact path="/productlist"
               element = {<ProductList/>}/>
               <Route exact path="/product"
               element = {<Product/>}/>
                <Route exact path="/register"
               element = {<Registeration/>}/>
                <Route exact path="/login"
               element = {<Login/>}/>
                <Route exact path="/cart"
               element = {<Cart/>}/>

            </Routes>

        </Router>






  )
  // return <Home/>;
  // return <ProductList/>;
  // return <Product/>;
  // return <Register/>;
  // return <Login/>;
  // return <Cart/>
};

export default App;