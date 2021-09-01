import * as React from 'react';
import PageHeader from "../common/PageHeader";
import productService from "../services/productService";


class AddProduct extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          price: '',
          imageUrl: ''
        };
    
      }
    
      //arrow function ->keeps this in bind
      handleInputChange = (event)=> {
        const target = event.target;
        const name = target.name;
    
        this.setState({
          [name]: target.value
        });
      }
      
      handleSubmit = async (e) => {
          e.preventDefault();//preventng page reload
          await productService.createProduct(this.state);
          this.props.history.replace("/");
        
      }

     render(){
 

        return ( 

            <div className="container">
                <PageHeader titleText="Product Form"/>
                    <div className="row">
                 <div className="col-12">
                    <p>Add new product</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} method="POST">
                        <div className="mb-3">
                            <label htmlFor="title" className="title">Title</label>
                            <input value={this.state.title} onChange={this.handleInputChange} name="title" type="text" className="form-control" id="title" aria-describedby="title"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="description">Description</label>
                            <input value={this.state.description} onChange={this.handleInputChange} name="description"  type="text" className="form-control" id="description" aria-describedby="description"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="price">Price</label>
                            <input value={this.state.price} onChange={this.handleInputChange} name="price" type="number" className="form-control" id="price" aria-describedby="price"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="price">Image url</label>
                            <input  value={this.state.imageUrl} onChange={this.handleInputChange} name="imageUrl" type="text" className="form-control" id="image" aria-describedby="image url"></input>
                        </div>
                        <input type="submit" className="btn btn-primary" value={'submit'}/>
                    </form>
                </div>
            </div>
           </div>

         );
        }
    
}
export default AddProduct;