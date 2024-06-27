import React, { ReactElement } from 'react';
import Header from './layout/header/Header.tsx';
import UpHeader from "./layout/upHeader/UpHeader.tsx";
import AboutTools from './layout/aboutTools/AboutTools.tsx';
import Purchase from './layout/purchase/Purchase.tsx';
import Solutions from './layout/solutions/Solutions.tsx';
import Clients from './layout/clients/Clients.tsx';
import CopyRight from './layout/copyRight/CopyRight.tsx';
import Footer from './layout/footer/Footer.tsx';
import Contact from './layout/contact/Contact.tsx';
import Statistic from './layout/statistic/Statistic.tsx';
import AboutUs from './layout/aboutUs/AboutUs.tsx';
import Carousel from './components/carousel/Carousel.tsx';

const App: React.FC = (): ReactElement => {
  return (
    <>
      <UpHeader />
      <Header />
      <Carousel />
      <AboutTools />
      <AboutUs />
      <Solutions />
      <Purchase />
      <Statistic />
      <Clients />
      <Contact />
      <Footer />
      <CopyRight />
    </>
  )
}

export default App;
