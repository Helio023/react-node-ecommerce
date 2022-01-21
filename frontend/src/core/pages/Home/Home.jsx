import React from 'react';
import Anouncement from '../../components/Anouncemment/Anouncement';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Products from '../../components/Products/Products';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  return (
    <div>
      <Header>
        <Anouncement />
        <Navbar />
      </Header>
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
