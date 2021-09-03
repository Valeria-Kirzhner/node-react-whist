import http from "./httpService";


export function createOrder(order) {
    return http.post("/orders", order);
}


const orderService = {
    
    createOrder
    
  
    };
    
export default orderService;