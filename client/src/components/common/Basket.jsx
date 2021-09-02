import React, { Component } from 'react';

class Basket extends Component {
    state = {  }
    render() { 

        const { cartItems , onAddToCart , onRemoveFromCart} = this.props;

        return (  
            <div className="row">
                <img className="col-md-4 " style={{ width:"80px", height:"60px", position: 'absolute', right: 50, top: 50}}  src={"https://mk0fullcartlee7r2lc4.kinstacdn.com/images/fc-logo-circle.png"} alt="cart" />
            <div>
                {cartItems.length === 0 && <div> Cart is empty</div>}
                
                { cartItems.map(( item ) => 
                <div>
                            <h2>
                            Cart Items
                             </h2>

                    <div key={ item._id } className="row">
            

                        <div className="col-2">{item.title}</div>

                            <div className="col-2">
                                <button onClick={() => onAddToCart( item ) } className="btn btn-primary ">
                                 +
                                </button>
                                <button onClick={() => onRemoveFromCart( item )} className="btn btn-primary">
                                -
                                </button>
                           </div> 

                    <div className="col-2 text-right"> {item.qty} X $ {item.price.toFixed(2)}</div>

                    </div>
                 </div>
                )};
                
            </div>

        </div>


        );
    }
}
 
export default Basket;