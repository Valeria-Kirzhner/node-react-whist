import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    return ( 

        <div className="container">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={'https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_1280.jpg'} alt={'j'} />
                    <div className="card-body">
                            <h5 className="card-title">{/*product.title*/}Title</h5>
                            <p className="card-text">{/*product.description*/}description</p>
                        </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{/*product.price*/} price</li>
                            </ul>
                    <div className="card-body">
                        < Link to={`/product/${12334}`} className="info_button" >View</Link>     |
                        < Link to={`/product/${12334}`} className="info_button" style={{margin: "left 20"}}>Add to Cart</Link>
                    </div>
            </div>
        </div>

     );
}
 
export default Product;