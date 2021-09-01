import React, { Component } from "react";
import PageHeader from "../common/PageHeader";
import productService from "../services/productService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class EditCard extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      
      data: {
          title: '',
          description: '',
          price: '',
          imageUrl: ''
      
      }
    };

  }

  async componentDidMount() {
    const productId = this.props.match.params.id;
    console.log(productId);
    const { data } = await productService.getProduct(productId);
    this.setState({ data: this.mapToViewModel(data) });
  }

  mapToViewModel(product) {
    return {
      _id: product._id,
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,

    };
  }

    //arrow function ->keeps this in bind
  handleInputChange = (event)=> {

    const target = event.target;
    const name = target.name;
    this.setState(prevState => ({
      data :{                 // object that I want to update
        ...prevState.data,     // keep all other key-value pairs
        [name]: target.value     // update the value of specific key
      }
    }))
  }

  handleSubmit = async (e) => {
    e.preventDefault();//preventing page reload
    await productService.updateProduct(this.state);
    this.props.history.replace("/");
  
}

  handleCancel = () => {
   // this.props.history.push("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText="Edit Product Form" />
        <div className="row">
          <div className="col-12">
            <p>Fill out product details here</p>
          </div>    
        </div>

        <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} method="POST">
                        <div className="mb-3">
                            <label htmlFor="title" className="title">Title</label>
                            <input defaultValue={this.state.data.title} onChange={this.handleInputChange} name="title" type="text" className="form-control" id="title" aria-describedby="title"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="description">Description</label>
                            <input defaultValue={this.state.data.description} onChange={this.handleInputChange} name="description"  type="text" className="form-control" id="description" aria-describedby="description"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="price">Price</label>
                            <input defaultValue={this.state.data.price} onChange={this.handleInputChange} name="price" type="number" className="form-control" id="price" aria-describedby="price"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="price">Image url</label>
                            <input  defaultValue={this.state.data.imageUrl} onChange={this.handleInputChange} name="imageUrl" type="text" className="form-control" id="image" aria-describedby="image url"></input>
                        </div>
                        <input type="submit" className="btn btn-primary" value={'submit'}/>
                    </form>
                </div>
            </div>    
        </div>
    );
  }
}

export default EditCard;