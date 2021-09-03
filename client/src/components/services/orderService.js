import http from "./httpService";

export function createOrder() {
    
    const orderList = localStorage.getItem('orderList');
    return http.post("/orders", orderList);
}

const orderService = {

    createOrder
    
    };
    
export default orderService;