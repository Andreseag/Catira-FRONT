import React from 'react';

function Search() {
  return (
    <>
      <div className='search-bar__search d-flex align-items-center col-9 px-3'>
        <form
          className='search-bar__search__form col-12 px-0 d-flex align-items-center '
          action=''
        >
          <img
            className='position-absolute ml-3'
            src='search.png'
            alt='search'
          />
          <div className='input-group d-flez align-items-center'>
            <input
              type='text'
              className='form-control'
              placeholder='Busca tu producto...'
              aria-label='Username'
              aria-describedby='basic-addon1'
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
