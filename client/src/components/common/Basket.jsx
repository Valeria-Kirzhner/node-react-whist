import React, { useState } from 'react';

const Basket =({cartItems , onAddToCart , onRemoveFromCart})=> {

const [ show, setShow ] = useState(false);

      

        return (  
            
     <div className="container">
        <div className="row">
             <div className="row">
                 <div className="col align-self-start"></div>
                    <div className="col align-self-center"></div>
                        <div className="col align-self-end"> 
                        <button onClick={ () => setShow(!show)}> <img src={"https://icon-library.com/images/cart-icon/cart-icon-16.jpg"} alt="cart" style={{ width: "50px", height:"50px"}}  /></button>
                        
                        {
                            show ?
                        
                        <div className="card" style={{width: "18rem" }}>
                        <div className="card-header"> </div>

                      
                        {cartItems.length === 0 && <div className="card-header" >Cart is empty</div>}
                            <ul className="list-group list-group-flush" >      
                                { cartItems.map(( item ) => 
                                    <div  key={ item._id } >
                                        <li className="list-group-item">{item.title}
                                            <div className=".col-md-3 .ml-md-auto">
                                                <button onClick={() => onAddToCart( item ) } className="btn ">
                                                        +
                                                </button>
                                                <button onClick={() => onRemoveFromCart( item )} className="btn ">
                                                        -
                                                </button>
                                            </div> 
                                        </li>
                                    </div>  
                                )}
                            </ul>
                     </div>

                              : null  }
                </div>
            </div>
        </div>
    </div>


        );
    }
 
export default Basket;