import React from 'react';

function Search() {
  return (
    <>
      <div className='search d-flex align-items-center col-9 px-3'>
        <form className='search__form col-12 px-0' action=''>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='basic-addon1'>
                @
              </span>
            </div>
            <input
              type='text'
              className='form-control'
              placeholder='Username'
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
