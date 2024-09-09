
import React from 'react';
import './MainLayout.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

const MainLayout = ({ children }) => {
  return (
    <div className='mainlayout' style={{width: '100%'}}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default MainLayout;
