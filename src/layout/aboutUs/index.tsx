import Modal from '../../components/modal';
import { Container, TitleSection, Div, DivAboutUs, P, DivVideo, ImgVideo,
   ButtonPlay, ContactButton, IoMdPlayIcon } from './styles';
import React, {ReactElement, useState} from 'react';

const backgroundVideo = '/assets/images/background_video.jpg';

type openModalType = {
  (modalName: string): void
}

type CloseModal = {
  (): void
}

const AboutUs: React.FC = (): ReactElement => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const openModalHandler: openModalType = (modalName: string): void => {
    setOpenModal(modalName);
  }

  const closeModalHandler: CloseModal = (): void => {
    setOpenModal(null);
  }

  return (
    <Container id="about">
      <TitleSection>SOBRE NÓS</TitleSection>

      <DivAboutUs>
        <Div>
          {/* <H4>Tornando o varejo ainda mais simples</H4> */}
          <P>Somos uma empresa que desmistifica a tecnologia para seus clientes transformando os obstáculos em operações rotineiras automatizadas.
            O objetivo da AUTOMATIZA FÁCIL é maximizar a produtividade dos gestores e colaboradores reduzindo rotinas burocráticas,
            transformando planilhas manuais em dashboards automatizados, possibilitando uma visão sistêmica do negócio através de ferramentas
            simples e intuitivas . Automatize sempre com a AUTOMATIZA FÁCIL</P>
          <ContactButton href="#contact">Contate-nos</ContactButton>
        </Div>

        <DivVideo>
          <ImgVideo src={backgroundVideo} />
          <ButtonPlay  onClick={() => openModalHandler('institutionalVideo')}>
            <IoMdPlayIcon />
          </ButtonPlay>

          <Modal isOpen={openModal === 'institutionalVideo'} onClose={closeModalHandler}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/F4ucXpi8uQQ?si=sG9p9feoQYRifKRZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Modal>
        </DivVideo>
      </DivAboutUs>
    </Container>
  )
}

export default AboutUs;
