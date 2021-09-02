import React from 'react';
//import { useCart } from 'react-use-cart';

const Product = ({ product , onAddToCart }) => {

    //const { addItem } = useCart();
   // const { onAddToCart } = this.props;

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
                        < button onClick={() => onAddToCart( product )} className="btn btn-primary" style={{margin: "left 20"}}>Add to Cart</button>
                    </div>
            </div>
        </div>
        </div>

     );
}
 
export default Product;