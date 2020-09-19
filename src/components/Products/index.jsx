import React from 'react';
import '../../styles/components/products.scss';
import Product from './Product';

function index() {
  return (
    <section className='products mt-5'>
      <div className='products__container'>
        <h2 className='products__title mb-4'>Productos</h2>
        <div className='products__content d-flex justify-content-between flex-wrap'>
          {'.'
            .repeat(6)
            .split('')
            .map(() => (
              <Product />
            ))}
        </div>
      </div>
    </section>
  );
}

export default index;
