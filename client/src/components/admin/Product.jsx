import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    return ( 
        <div className="col-md-6 col-lg-4 mt-3">
        <div className="container">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" width="100" src={product.imageUrl} alt={product.title} />
                    <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                        </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{product.price} $</li>
                            </ul>
                    <div className="card-body">  
                        < Link to={`/product/${12334}`} className="info_button" style={{margin: "left 20"}}>Add to Cart</Link>
                    </div>
            </div>
        </div>
        </div>

     );
}
 
export default Product;