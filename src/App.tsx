import React, { ReactElement } from 'react';
import Header from './layout/header/index.tsx';
import UpHeader from "./layout/upHeader/index.tsx";
import AboutTools from './layout/aboutTools/index.tsx';
import Purchase from './layout/purchase/index.tsx';
import Solutions from './layout/solutions/index.tsx';
// import Clients from './layout/clients/index.tsx';
import CopyRight from './layout/copyRight/index.tsx';
import Footer from './layout/footer/index.tsx';
import Contact from './layout/contact/index.tsx';
import Statistic from './layout/statistic/index.tsx';
import AboutUs from './layout/aboutUs/index.tsx';
import Carousel from './components/carousel/index.tsx';
import Maintenance from './layout/maintenance/index.tsx';

const App: React.FC = (): ReactElement => {
  const isMaintenanceMode: boolean = import.meta.env.VITE_APP_MAINTENANCE_MODE === 'true';

  if(isMaintenanceMode) {
    return <Maintenance />;
  }

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
      {/* <Clients /> */}
      <Contact />
      <Footer />
      <CopyRight />
    </>
  )
}

export default App;
