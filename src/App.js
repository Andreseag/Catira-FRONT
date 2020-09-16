import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import './styles/base.scss';

function App() {
  return (
    <div className='App mx-4'>
      <Header />
      <Products />
    </div>
  );
}

export default App;
