import { Container, TitleSection, Div, DivAboutUs, H4, P, DivVideo, ImgVideo,
   ButtonPlay, ContactButton, IoMdPlayIcon } from './Styles';
import React, {ReactElement} from 'react';

const backgroundVideo = '/assets/images/background_video.jpg';

const AboutUs: React.FC = (): ReactElement => {
   return (
      <Container id="about">
         <TitleSection>SOBRE NÓS</TitleSection>

         <DivAboutUs>
            <Div>
               <H4>Tornando o varejo ainda mais simples</H4>
               <P>Somos profissionais que acreditam que a tecnologia deve ser um aliado e não um obstáculo para o sucesso em qualquer setor. O objetivo da AUTOMATIZA FÁCIL é reduzir rotinas burocráticas e o excesso de planilhas, criando micros serviços independentes, intuitivos e autônomos, tornando o varejo simples ainda mais simples.</P>
               <ContactButton href="#contact">Contate-nos</ContactButton>
            </Div>
            <DivVideo>
               <ImgVideo src={backgroundVideo} />
               <ButtonPlay>
                  <IoMdPlayIcon />
               </ButtonPlay>
            </DivVideo>
         </DivAboutUs>
      </Container>
   )
}

export default AboutUs;
