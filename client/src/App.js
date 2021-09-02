import React,{Component} from "react";
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


class App extends Component {

  state = {
    products: [],
    cartItems: []
  };

  async componentDidMount() {
    const { data } = await productService.allProducts();
    if (data.length > 0) this.setState({ products: data });
  }

  onAddToCart = ( product ) => {
        
    const exist = this.state.cartItems.find(( cartItem ) => cartItem._id === product._id ); // check if item is exist in the cart
    if ( exist ) { // if the cart have some item  - add the exist quontety +1 

      let foundItem = ( this.state.cartItems.map(( cartItem ) => 

         cartItem._id === product._id ? { ...exist , qty: exist.qty + 1 } : cartItem // in case the item in the cartitem id isn't equal to the product id - don't change that, return current item.
      ));
      this.setState({cartItems : foundItem});
      
    } else {// if not exist - create the first one
      console.log('inn');
      this.setState({...this.state.cartItems}, { ...product, qty:1 });
    }
    
  }

  render() { 

    return ( 
      <React.Fragment>
      <header>
         <Navbar />
         < Basket onAddToCart={this.onAddToCart} cartItems={this.state.cartItems}  />
       </header>
       <main>
         <Switch >
         <Route exact path="/" render={(props) => <Home products={this.state.products} onAddToCart={this.onAddToCart} {...props} />} />
         <Route path="/product/add" component={AddProduct}/>
         <Route exact path="/product" component={Product}/>
         <Route exact path="/admin" component={AdminHome}/>
         <Route exact path="/product/edit/:id" component={EditProduct}/>
         
         </Switch>
       </main>
   </React.Fragment>

     );
  }
}
 
export default App;
