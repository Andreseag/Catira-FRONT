import React from 'react';
import Search from './Search';
import CatalogSelect from './CatalogSelect';

function index() {
  return (
    <>
      <div className='search-bar d-flex justify-content-between px-4'>
        <div className='search-bar__logo'>
          <img src='lacatira-logo.png' alt='lacatira-logo' />
        </div>
        <CatalogSelect />
        <Search />
        <div className='search-bar__cart d-flex align-items-center'>
          <img src='cart.png' alt='cart' />
        </div>
      </div>
    </>
  );
}

export default index;
