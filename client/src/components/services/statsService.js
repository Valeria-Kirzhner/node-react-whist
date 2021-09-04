import http from "./httpService";

export function getStats() {
    return http.get("/stats/top-products");
}

const orderService = {
    getStats
    };
    
export default orderService;