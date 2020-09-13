import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className='nav-app d-flex align-items-center justify-content-between px-4 pb-2 pt-1'>
        <div className='info d-flex align-items-center'>
          <div className='info__ubication mr-4'>
            <img src='' alt='' />
            <small>Villavicencio, Meta</small>
          </div>
          <div className='info__phone'>
            <img src='' alt='' />
            <strong className='black-color'>+57 321 234 58 69</strong>
          </div>
        </div>
        <nav className='navbar px-0'>
          <ul className='navbar-nav d-flex flex-row'>
            <li className='ml-4'>
              <a className='small-link' href='#'>
                Contacto
              </a>
            </li>
            <li className='ml-4'>
              <a className='small-link' href='#'>
                Entregas
              </a>
            </li>
            <li className='ml-4'>
              <a className='small-link' href='#'>
                Pagos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
