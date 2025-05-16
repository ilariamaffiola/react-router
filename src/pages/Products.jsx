import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
function Products() {
const [products, setProducts] = useState(null);

const getProducts = () => {
  axios.get("https://fakestoreapi.com/products").then((res) => {
    setProducts(res.data);
  });
};
useEffect(() => {
  getProducts();
},[]);
  return (
    <>
    <MainNavbar />
    <h1>Products List</h1>
    <div className='container'>
      <div className="row g-4">
        {products === null ? (
          <div>Loading...</div>
        ) : (
          <div className="row g-4">
          {products.map((product) => (
            <div className="col-4">
              <div className="card" key={product.id}>
                <div className="card-img">
                  <img className='img-fluid' src={product.image} alt={product.title} />
                </div>
                <div className="card-body">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Products
