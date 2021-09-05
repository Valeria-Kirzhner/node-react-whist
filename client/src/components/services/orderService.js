import http from "./httpService";

export function createOrder(orderList) {
    return http.post("/api/orders", orderList);
}

const orderService = {
    createOrder
    };
    
export default orderService;