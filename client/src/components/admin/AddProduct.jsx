import React, { useState } from 'react';
import PageHeader from "../common/PageHeader";
import productService from "../services/productService";
import { Link } from "react-router-dom";



const AddProduct = ({history,addProduct})=>{

    const [allValues, setAllValues] = useState({
        title: '',
        description: '',
        price: '',
        imageUrl: '',
     });
   
      //arrow function ->keeps this in bind
   const handleInputChange = (e)=> {
    setAllValues({...allValues, [e.target.name]: e.target.value})

      }
      
   const handleSubmit = async (e) => {
          e.preventDefault();//preventing page reload
        const {data} =await productService.createProduct(allValues);
          addProduct(data)
          history.replace("/");
        
      }


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
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="mb-3">
                            <label htmlFor="title" className="title">Title</label>
                            <input value={allValues.title} onChange={handleInputChange} name="title" type="text" className="form-control" id="title" aria-describedby="title"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="description">Description</label>
                            <input value={allValues.description} onChange={handleInputChange} name="description"  type="text" className="form-control" id="description" aria-describedby="description"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="price">Price</label>
                            <input value={allValues.price}  onChange={handleInputChange} name="price" type="number" className="form-control" id="price" aria-describedby="price"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="price">Image url</label>
                            <input value={allValues.imageUrl} onChange={handleInputChange} name="imageUrl" type="text" className="form-control" id="image" aria-describedby="image url"></input>
                        </div>
                        <input type="submit" className="btn btn-primary" value={'submit'}/>
                        <Link className="btn btn-secondary ms-2 mt-2" to="/admin">Cancel</Link>
                    </form>
                </div>
            </div>
           </div>

         );
        }
    
export default AddProduct;