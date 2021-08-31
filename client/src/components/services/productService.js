import http from "./httpService";


export function allProducts(product) {
    return http.get("/products/", product);
}

export function createProduct(product) {
    return http.post("/products", product);
}

const productService = {

  allProducts,
  createProduct

  };
  
  export default productService;