import React from 'react';

function Product() {
  return (
    <article
      className='product card border-0 px-4 pb-4'
      style={{ width: '15rem' }}
    >
      <div className='product__img text-center mt-5'>
        <img src='product.png' alt='product' />
      </div>
      <div className='product__body d-flex flex-column'>
        <p className='product__body__name mt-4'>Queso doble crema</p>
        <span className='product__body__price'>
          <strong>$2.500</strong>
          <small>/kg</small>
        </span>
        <small className='product__body__code mt-2'>No. 152425364</small>
        <div className='button-add-card text-center mt-4'>
          <button className='btn btn-primary btn-sm green-button px-3'>
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
}

export default Product;
