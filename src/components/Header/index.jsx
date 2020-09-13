import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import '../../styles/components/header.scss';

const index = () => {
  return (
    <div className='header'>
      <NavBar />
      <SearchBar />
    </div>
  );
};

export default index;
