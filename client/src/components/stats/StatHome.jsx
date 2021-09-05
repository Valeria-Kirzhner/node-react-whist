import React,{useEffect, useState} from "react";
import statsService from "../services/statsService";
import PageHeader from "../common/PageHeader";


const StatHome = () => {

    const [ allStats,setAllStats] = useState([]);

    useEffect(() => {
    
      const fetchData = async () => {

        const { data } = await statsService.getStats();
        setAllStats(data);
      }
      fetchData();
    }, []);     
  

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

                            { allStats[0] && (
                                allStats[0].map((product,index) => (
                                    
                                    <li key={index} className="list-group-item">
                                     <h6>Title: &nbsp;&nbsp;
                                        { product.title} 
                                     </h6>
                                     <h6>Total sales: &nbsp;&nbsp;
                                      {  product.total}
                                     </h6>
                                    </li>
                               ))
                                
                             ) }
 
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

                            { allStats[0] && (
                                allStats[0].map((product,index) => (
                                    
                                    <li key={index} className="list-group-item">
                                     <h6>Title: &nbsp;&nbsp;
                                        { product.title} 
                                     </h6>
                                     <h6>Total orders: &nbsp;&nbsp;
                                      {  product.count}
                                     </h6>
                                    </li>
                                ))
                                
                             ) }
 
                            </ul>
                        </div>
                    </div>


                    {/*last 5 days*/}
                    <div className="col-md-6 col-lg-4 mt-3">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-header">
                                <h5>
                                Top 5 unique sel
                                </h5>
                            </div>
                            <ul className="list-group list-group-flush">

                            { allStats[1] && (
                                allStats[1].map((order,index) => (
                                    
                                    <li key={index} className="list-group-item">
                                     <h6>Date: &nbsp;&nbsp;
                                        { order.date} 
                                     </h6>
                                     <h6>Total : &nbsp;&nbsp;
                                      {  order.totalSum.totalSum  }
                                     </h6>
                                    </li>
                                ))
                                
                            )}
 
                            </ul>
                        </div>
                    </div>



                </div>
            </div>
     );
}
 
export default StatHome;