import React, { useEffect, useState } from "react";
import PageHeader from "../common/PageHeader";
import productService from "../services/productService";
import { Link } from "react-router-dom";

const EditCard = ({ match,editProduct, history }) => {

  const [allValues, setAllValues] = useState({
    id:'',
    title: '',
    description: '',
    price: '',
    imageUrl: '',
 });

 useEffect(() => {
  
  const fetchData = async ()=>{
    const productId = match.params.id;
    const { data } = await  productService.getProduct(productId);
    setAllValues( data );
  }

  fetchData();
}, [match.params.id]); 

      //arrow function ->keeps this in bind
      const handleInputChange = (e)=> {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    
          }

  const handleSubmit = async (e) => {
    e.preventDefault();//preventing page reload
   
    const {data} =  await productService.updateProduct(allValues);
    editProduct(data);
    history.replace("/");
  
}

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
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="mb-3">
                            <label htmlFor="title" className="title">Title</label>
                            <input defaultValue={allValues.title} onChange={handleInputChange} name="title" type="text" className="form-control" id="title" aria-describedby="title"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="description">Description</label>
                            <input defaultValue={allValues.description} onChange={handleInputChange} name="description"  type="text" className="form-control" id="description" aria-describedby="description"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="price">Price</label>
                            <input defaultValue={allValues.price} onChange={handleInputChange} name="price" type="number" className="form-control" id="price" aria-describedby="price"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="price">Image url</label>
                            <input  defaultValue={allValues.imageUrl} onChange={handleInputChange} name="imageUrl" type="text" className="form-control" id="image" aria-describedby="image url"></input>
                        </div>
                        <input type="submit" className="btn btn-primary" value={'submit'}/>
                        <Link className="btn btn-secondary ms-2 mt-2" to="/admin">Cancel</Link>
                    </form>
                </div>
            </div>    
        </div>
    );
  
}

export default EditCard;
