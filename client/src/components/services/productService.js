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

export function updateProduct(product) {
  const cardId = product.data._id;
  console.log(product.data._id);
  delete product.data._id; //in the backend is waiting validation and it uses for updating and creating new card. New card is not have any id card before creation so i can not send now id in the payload.
  return http.put(`/products/${cardId}`, product.data);
}


const productService = {

  allProducts,
  createProduct,
  getProduct,
  updateProduct

  };
  
  export default productService;