import React,{useEffect, useState} from "react";
import './App.css';
import Navbar from "./components/common/Navbar";
import AddProduct from "./components/admin/AddProduct";
import Home from "./components/Home";
import AdminHome from "./components/admin/AdminHome";
import EditProduct from "./components/admin/EditProduct";
import Product from "./components/Product";
import productService from "./components/services/productService";
import { Switch, Route } from "react-router-dom";
import Basket from "./components/common/Basket";


const  App = () => {

  const [products,setProducts] = useState([]);
  const [cartItems,setCartItems] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

// get all products
  const fetchData = async ()=>{
    const { data } = await productService.allProducts();
    if (data.length > 0)  setProducts(data);
  }


const onAddToCart = ( product ) => {
    const exist = cartItems.find(( cartItem ) => cartItem._id === product._id ); // check if item is exist in the cart

    if ( exist ) { // if the cart have some item  - add the exist quontety +1 

      setCartItems( 
        cartItems.map(( cartItem ) => 
         cartItem._id === product._id ? { ...exist , qty: exist.qty + 1 } : cartItem // in case the item in the cartitem id isn't equal to the product id - don't change that, return current item.
      ));


    } else {// if not exist - create the first one

      setCartItems([...cartItems, { ...product, qty:1 }]);
  

    }
    

  }
  const onRemoveFromCart = ( product ) => {

    const exist = cartItems.find(( cartItem ) => cartItem._id === product._id ); 
    if (exist.qty === 1){ // if there is exist one product 
      setCartItems( cartItems.filter( (cartItem) => cartItem._id !== product._id ));
    } else {
      setCartItems( 
        cartItems.map(( cartItem ) => 
         cartItem._id === product._id ? { ...exist , qty: exist.qty - 1 } : cartItem 
      ));
    }


  }

    return ( 
      <React.Fragment>
      <header>
         <Navbar />
       </header>
       <main >
        < Basket onAddToCart={onAddToCart} cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />

         <Switch >
         <Route exact path="/" render={(props) => <Home products={products} onAddToCart={onAddToCart} {...props} />} />
         <Route path="/product/add" component={AddProduct}/>
         <Route exact path="/product" component={Product}/>
         <Route exact path="/admin" component={AdminHome}/>
         <Route exact path="/product/edit/:id" component={EditProduct}/>
         
         </Switch>
       </main>
   </React.Fragment>

     );
  }

 
export default App;
