import React from 'react';

function CatalogSelect() {
  return (
    <>
      <div className='catalog-select d-flex align-items-center ml-3'>
        <button className='btn btn-success'>
          <img className='mr-2' src='menu-icon.png' alt='menu-icon' />
          Catálogo
        </button>
      </div>
    </>
  );
}

export default CatalogSelect;
