import http from "./httpService";


export function allProducts(card) {
    return http.get("/products/", card);
  }

const productService = {

  allProducts

  };
  
  export default productService;