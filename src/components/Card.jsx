import React from 'react'
import { Link } from 'react-router-dom'

function Card({ product }) {
    return (
        <div className='card'>
            <Link className="link" to={`/product/${product.id}`}>
            <span className='title'>{product.title}</span>
            <img src={product.img} alt="" />

            <span className="oldPrice">De: {product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</span>
                <span className="price">Por: {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</span>
                {/* <button className="btn btn-primary mt-3">Saiba mais</button> */}
            </Link>
        </div>
    )
}

export default Card