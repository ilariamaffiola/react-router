import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const DetailProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setProduct(res.data);
        });
    };
    useEffect(() => {
        getProduct();
    }, [])
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-center mb-3'>Dettaglio prodotto</h1>
        {product === null ? (
            <div className="row">
                <div className="col-12 text-center">
                    <span className="loader"></span>
                </div>
            </div>
        ):
        (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-img card-img-prodotto">
                                <img className='img-fluid immagine-prodotto' src={product.image} alt={product.title} />
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
                <button className='btn btn-primary mt-3' onClick={() => {
                    navigate(-1);
                }} >
                    Torna indietro
                    </button>
            </div>
        
        )
        }
    </div>
  )
}

export default DetailProduct
