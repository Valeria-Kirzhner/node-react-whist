import http from "./httpService";

export function getProduct(productId) {
    return http.get(`/api/products/${productId}`);
  }

export function allProducts() {
    return http.get("/api/products/");
}

export function createProduct(product) {
    return http.post("/api/products", product);
}

export function updateProduct(product) {
  const cardId = product._id;
  delete product._id; //in the backend is waiting validation and it uses for updating and creating new card. New card is not have any id card before creation so i can not send now id in the payload.
  return http.put(`/api/products/${cardId}`, product);
}


const productService = {

  allProducts,
  createProduct,
  getProduct,
  updateProduct

  };
  
  export default productService;