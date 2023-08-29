import React from 'react'
import { useLocation } from 'react-router-dom'
import { products } from '../data';

function Product() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const product = products.find(p => p.id.toString() === path);

  return (
    <div className='product'>
      <img src={product.img} alt="" />

      <div className="content">

        <h2 className="title">{product.title}</h2>

        De: <span className="oldPrice">{product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</span>
        <span> Por:   </span><span className='price'>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</span>

        <p className="descr">{product.descr}</p>

        <span htmlFor="">Descrição completa:</span>
        <hr />
        <p className="longDescr">{product.longDescr}</p>


        <button className="btn btn-success">Comprar</button>
      </div>
    </div>
  )
}

export default Product