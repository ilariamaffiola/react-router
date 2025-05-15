import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { useState } from 'react'
import axios from 'axios'
function Products() {
const [products, setProducts] = useState([]);

const getProducts = () => {
  axios.get("https://fakestoreapi.com/products").then((res) => {
    setProducts(res.data);
  });
}
  return (
    <>
    <MainNavbar />
    <div>
      <div className="row">
        
      </div>
    </div>
    </>
  )
}

export default Products
