import React, { Component } from 'react';

class Basket extends Component {
    state = {  }
    render() { 
        const {cartItems} = this.props;

        return (  
            <div className="row">
                <img className="col-md-4 " style={{ width:"80px", height:"60px", position: 'absolute', right: 50, top: 50}}  src={"https://mk0fullcartlee7r2lc4.kinstacdn.com/images/fc-logo-circle.png"} alt="cart" />
            <h2>
                Cart Items
            </h2>
            <div>
                {cartItems === false && <div> Cart is empty</div>}
            </div>

        </div>


        );
    }
}
 
export default Basket;