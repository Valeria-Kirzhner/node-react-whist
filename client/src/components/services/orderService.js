import http from "./httpService";

export function createOrder(orderList) {
    return http.post("/orders", orderList);
}

const orderService = {
    createOrder
    };
    
export default orderService;