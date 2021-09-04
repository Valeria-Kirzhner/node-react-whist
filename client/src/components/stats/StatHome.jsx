import React,{useEffect, useState} from "react";
import statsService from "../services/statsService";
import PageHeader from "../common/PageHeader";


const StatHome = () => {

    const [ topProducts,setTopProducts] = useState([]);
  


    useEffect(() => {
    
      const fetchData = async () => {

        const { data } = await statsService.getStats();
        if (data.length > 0)  setTopProducts(data);

      }
      fetchData();
    }, [] );     
  

    return ( 
        <div className="container">
             <PageHeader titleText="All Products" />     
                 <div className="row">
                {/* Top products */}

                    <div className="col-md-6 col-lg-4 mt-3">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-header">
                                <h5>
                                Top 5 sold Products
                                </h5>
                            </div>
                            <ul className="list-group list-group-flush">

                            { 
                                topProducts.map((product,index) => (
                                    
                                    <li key={index} className="list-group-item">
                                     <h6>Title: &nbsp;&nbsp;
                                        { product.title} 
                                     </h6>
                                     <h6>Total sales: &nbsp;&nbsp;
                                      {  product.total}
                                     </h6>
                                    </li>
                                ))
                                
                              }
 
                            </ul>
                        </div>
                    </div>

                    {/*Top orders*/}
                    <div className="col-md-6 col-lg-4 mt-3">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-header">
                                <h5>
                                Top 5 unique sel
                                </h5>
                            </div>
                            <ul className="list-group list-group-flush">

                            { 
                                topProducts.map((product,index) => (
                                    
                                    <li key={index} className="list-group-item">
                                     <h6>Title: &nbsp;&nbsp;
                                        { product.title} 
                                     </h6>
                                     <h6>Total orders: &nbsp;&nbsp;
                                      {  product.count}
                                     </h6>
                                    </li>
                                ))
                                
                              }
 
                            </ul>
                        </div>
                    </div>



                </div>
            </div>
     );
}
 
export default StatHome;