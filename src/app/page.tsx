import React from 'react';
import Header from '@/components/Header/Header';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import Blog from '@/components/Blog/Blog';

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeBanner />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
} 