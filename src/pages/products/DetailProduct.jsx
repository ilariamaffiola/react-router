import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'

const DetailProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const getProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setProduct(res.data);
        });
    };
    useEffect(() => {
        getProduct();
    }, [])
  return (
    <div>
        <h1 className='text-center mb-3'>Dettaglio prodotto</h1>
        {product === null ? (
            <div className="row">
                <div className="col-12">
                    <span className="loader"></span>
                </div>
            </div>
        ):
        (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-img">
                                <img className='img-fluid' src={product.image} alt={product.title} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.category}</p>
                                <p className="card-text">€{product.price}</p>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
        }
    </div>
  )
}

export default DetailProduct
