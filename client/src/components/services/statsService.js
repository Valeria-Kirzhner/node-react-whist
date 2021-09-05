import http from "./httpService";

export function getStats() {
    return http.get("/api/stats/top-products");
}

export function getLastOrders() {
    return http.get("/api/stats/last-orders");
}

const orderService = {
    getStats,
    getLastOrders
    };
    
export default orderService;