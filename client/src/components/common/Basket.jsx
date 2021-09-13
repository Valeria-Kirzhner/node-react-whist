import React from 'react';
import $ from 'jquery';

const Basket =({cartItems ,show, setShow, onAddToCart , onRemoveFromCart, onPay })=> {

const totalSum = cartItems.reduce( (a,c) => a + c.price * c.qty, 0); // I use reduce function in cart items, it accepts 2 param - a (acamulator) , c (current item). The difault value of acamulator is 0.

$('#cart').on('hide.bs.dropdown', function (e) {
    if (e.clickEvent) {
      e.preventDefault();
    }
  })
    return (  
            
     <div className="container">
                       
                        {   show ?
                        <div className="dropdown-menu dropdown-menu-right" style={{width: "18rem" , minHeight: "300px"}}>
                        <h4 className="ml-3" >Cart items </h4>
    
                        <div>{cartItems.length === 0 &&(<div >The cart is empty</div>)}</div>
                            <div className="container">
                                <div style={{minHeight: 200}}>
                                { cartItems.map(( item ) => // if cartItems !===0 
                                    <div key={ item._id } style={{minWidth:250}} >
                                        <div className="list-group-item" >
                                            {item.title}     
                                        </div>
                                        <div className="float-right"> 
                                            <button onClick={() => onAddToCart( item ) } className="btn">+</button>
                                                <button onClick={() => onRemoveFromCart( item ) } className="btn">-</button>
                                            </div> 
                                            <div className="ml-2 mt-2">{item.qty} X ${item.price}</div>
                                    </div>  
                                )}
                                </div>
                                <hr />
                            {cartItems.length !== 0 && (// only if the sum items is greater than 0
                                <div className="mb-2" style={{ width: 250, position:'relative'}}>
                                  
                                        <div className="float" >
                                        <strong>Total price</strong>${totalSum}
                                        <div className="float-right">
                                        <button className="btn btn-primary" onClick={ () => onPay(totalSum) && setShow(false)}>Pay</button>
                                        </div>
                                        </div>
                             
                                </div>
                            )}

                         </div>                    

                         </div>
                    : null  }
            </div>
        );
    }
 
export default Basket;