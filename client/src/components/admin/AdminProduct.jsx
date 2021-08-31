import React from 'react';

const AdminProduct = ({ product }) => {

    return ( 
        <div className="container">
            <table className="table">
  <thead>
    <tr>
      <th scope="col"># id</th>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{product._id}</th>
      <td>{product.title}</td>
      <td>{product.price} $</td>
      <td><img src={product.imageUrl} alt={product.title}  width="100px"/></td>
      <td>
      <button style={{marginRight: 10}} type="button" className="btn btn-outline-primary">Update</button>
      
      <button type="button" className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
        </div>

     );
}
 
export default AdminProduct;