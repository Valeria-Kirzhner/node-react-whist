import http from "./httpService";

export function getStats() {
    return http.get("/stats/top-products");
}

export function getLastOrders() {
    return http.get("/stats/last-orders");
}

const orderService = {
    getStats,
    getLastOrders
    };
    
export default orderService;