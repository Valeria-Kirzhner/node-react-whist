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


class App extends Component {

  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await productService.allProducts();
    if (data.length > 0) this.setState({ products: data });
  }

  setProducts = (id)=>{
   const updatedProducts = this.state.products.filter((prd)=> prd._id === id)
   this.setState({products:updatedProducts})
  }

  render() { 

    return ( 
      <React.Fragment>
      <header>
         <Navbar />
       </header>
       <main>
         <Switch >
         <Route exact path="/" render={(props) => <Home products={this.state.products} setProducts={this.setProducts} {...props} />} />
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
