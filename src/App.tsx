import React, { ReactElement, useEffect, useState } from 'react';
import Header from './layout/header/index.tsx';
import UpHeader from "./layout/upHeader/styles.tsx";
import AboutTools from './layout/aboutTools/index.tsx';
import Purchase from './layout/purchase/index.tsx';
import Solutions from './layout/solutions/index.tsx';
import Clients from './layout/clients/index.tsx';
import CopyRight from './layout/copyRight/index.tsx';
import Footer from './layout/footer/index.tsx';
import Contact from './layout/contact/index.tsx';
import Statistic from './layout/statistic/index.tsx';
import AboutUs from './layout/aboutUs/index.tsx';
import Carousel from './components/carousel/index.tsx';
import ModalMessage from './components/modalMessage/index.tsx';

type openModalType = {
  (modalName: string, message: string): void
}

type CloseModal = {
  (): void
}

const App: React.FC = (): ReactElement => {
  const[openModal, setOpenModal] = useState<string | null>(null);
  const[modalMessage, setModalMessage] = useState<string>('');

  const openModalHandler: openModalType = (modalName: string, message: string): void => {
    setOpenModal(modalName);
    setModalMessage(message);

  }

  const closeModalHandler: CloseModal = (): void => {
    setOpenModal(null);
  }

  useEffect(() => {
    const listLinks: NodeListOf<Element> = document.querySelectorAll('.linksSocial');

    listLinks.forEach(link => {
      link.addEventListener('click', (event)=> {
        event.preventDefault();
        openModalHandler('modalMessage', 'Aguarde. Em breve nossas redes sociais estarão funcionando.');
      })
    });
  }, []);

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

      <ModalMessage isOpen={openModal === 'modalMessage'} onClose={closeModalHandler} message={modalMessage} />
    </>
  )
}

export default App;
