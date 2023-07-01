import Slider from '../../components/Slider/Slider';
import React from 'react';
import "./Home.scss"
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <div className="home">
        <Slider/>
        <FeaturedProduct type="featured"/>
        <Categories/>
        <FeaturedProduct type="trending"/>
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
