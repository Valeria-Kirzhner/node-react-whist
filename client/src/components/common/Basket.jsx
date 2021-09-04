import React, { useState } from 'react';

const Basket =({cartItems , onAddToCart , onRemoveFromCart, countCartItems, onPay })=> {

const [ show, setShow ] = useState(false);// toggle button cart
const totalSum = cartItems.reduce( (a,c) => a + c.price * c.qty, 0); // I use reduce function in cart items, it accepts 2 param - a (acamulator) , c (current item). The difault value of acamulator is 0.

    return (  
            
     <div className="container">
        <div className="row">
            <div className="col align-self-start"></div>
                <div className="col align-self-center"></div>

                    <div className="col align-self-end"> 
                    <button onClick={ () => setShow(!show)}> <img src={"https://icon-library.com/images/cart-icon/cart-icon-16.jpg"} alt="cart" style={{ width: "50px", height:"50px"}}  /></button>  
                        { '   '} {countCartItems ? (<button> {countCartItems}</button>) : (  '' )}     
                       
                        {   show ?
                        
                        <div className="card" style={{width: "18rem" , minHeight: "300px"}}>
                        <h4 className="" >Cart items </h4>
    
                        <div>{cartItems.length === 0 &&(<div >The cart is empty</div>)}</div>

                                { cartItems.map(( item ) => // if cartItems !===0 
                                    <div key={ item._id } >
                                        <div className="list-group-item">{item.title}
                                            <div className="col-md-3 ml-md-auto">
                                                <button onClick={() => onAddToCart( item ) } className="btn">
                                                        +
                                                </button>
                                                <button onClick={() => onRemoveFromCart( item )} className="btn">
                                                        -
                                                </button>
                                            </div> 
                                            <div>{item.qty} X ${item.price}</div>
                                        </div>
                                    </div>  
                                )}
                            {cartItems.length !== 0 && (// only if the sum items is greater than 0
                                <div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className=""><strong>Total price</strong></div>
                                        <div>${totalSum}</div>

                                        </div>
                                    <div className="row" >
                                        <button onClick={ () => onPay(totalSum) && setShow(false)}>Pay</button>

                                    </div>
                             
                                </div>
                                

                            )}

                         </div>

                    : null  }
            </div>
        </div>
    </div>


        );
    }
 
export default Basket;