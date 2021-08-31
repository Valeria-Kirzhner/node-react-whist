import React, { Component } from "react";
import PageHeader from "../common/PageHeader";
import productService from "../services/productService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class EditCard extends Component {
  state = {
    data: {
      title: "",
      description: "",
      price: "",
      imageUrl: "",
    },
    errors: {},
  };

  async componentDidMount() {
    const productId = this.props.match.params.id;
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
  changehandler = (event) => {
         
    this.setState.data({
        [event.target.name]: event.target.value,
    })
 }

  handleSubmit = async () => {
    const { data } = this.state;
    //await productService.editProduct(data);
   // toast("Card is Updated");
   // this.props.history.replace("/my-cards");
  };

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
        <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="title" className="title">Title</label>
                            <input value={this.state.data.title} onChange={this.changehandler} name="title" type="text" className="form-control" id="title" aria-describedby="title"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="description">Description</label>
                            <input value={this.state.data.description} onChange={this.changehandler} name="description"  type="text" className="form-control" id="description" aria-describedby="description"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="price">Price</label>
                            <input value={this.state.data.price} onChange={this.changehandler} name="price" type="number" className="form-control" id="price" aria-describedby="price"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="price">Image url</label>
                            <input value={this.state.data.imageUrl} onChange={this.changehandler} name="image" type="text" className="form-control" id="image" aria-describedby="image url"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
    );
  }
}

export default EditCard;