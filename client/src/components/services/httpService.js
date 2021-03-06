import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "";

//this will catch all responses with reject.
axios.interceptors.response.use(null, (error) => {
    const expectedError = error.response && error.response.status >= 403;
    if (expectedError) toast.error("An unexpected error occurrred.");
    return Promise.reject(error);
  });

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
  };
  export default http;