import http from "./httpService";

export function getProduct(productId) {
    return http.get(`/products/${productId}`);
  }

export function allProducts(product) {
    return http.get("/products/", product);
}

export function createProduct(product) {
    return http.post("/products", product);
}

const productService = {

  allProducts,
  createProduct,
  getProduct

  };
  
  export default productService;