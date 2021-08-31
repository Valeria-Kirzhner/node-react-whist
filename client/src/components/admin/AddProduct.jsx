import React, { Component } from 'react';
import PageHeader from "../common/PageHeader";
import productService from "../services/productService";

class AddProduct extends Component {

    state = {
        data:{
            title: '',
            description: '',
            price: '',
            image: ''
        }
    }

     changehandler = (event) => {
         
        this.setState.data({
            [event.target.name]: event.target.value,
        })
     }
     handleSubmit = event => {
        const { data } = this.state;
        console.log(data);
        //if (!data.bizImage) delete data.bizImage;
       // await cardService.createCard(this.state.data);
     //   toast("A new card is opened");
       // this.props.history.replace("/my-cards");
     }
    render() { 

        return ( 

            <div className="container">
                <PageHeader titleText="Product Form" />
                    <div className="row">
                 <div className="col-12">
                    <p>Add new product</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={this.handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="title" className="title">Title</label>
                            <input value={this.state.title} onChange={this.changehandler} name="title" type="text" className="form-control" id="title" aria-describedby="title"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="description">Description</label>
                            <input value={this.state.description} onChange={this.changehandler} name="description"  type="text" className="form-control" id="description" aria-describedby="description"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="price">Price</label>
                            <input value={this.state.price} onChange={this.changehandler} name="price" type="number" className="form-control" id="price" aria-describedby="price"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="price">Image url</label>
                            <input value={this.state.image} onChange={this.changehandler} name="image" type="text" className="form-control" id="image" aria-describedby="image url"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
           </div>

         );
    }
}
 
export default AddProduct;