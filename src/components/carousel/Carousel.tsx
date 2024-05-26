import React, { ReactElement } from 'react';
import {Container, ImgOne, DivModal, DivModalObjects, TitleTextModal, TextModal} from './Styles.ts';
import {Swiper, SwiperSlide} from 'swiper/react';

interface Images {
   id: string;
   image: string;
   title: string;
   description: string;
   modalHandler: string;
}

const images: Images[] = [
   {id: '1', image: '/assets/images/carousel/nps_carousel.jpg', title: 'Pesquisa de Satisfação',
   description: 'Conheça o seu cliente e veja o que ele pensa da sua empresa e como está sendo a experiência com o seus produtos ou serviços.',
   modalHandler: 'npsModal'},

   {id: '2', image: '/assets/images/carousel/app_collector.jpg', title: 'App Coletor de Dados',
   description: 'O app Meu Coletor de Dados permite transformar o seu smartphone em um equipamento para a coleta de dados.',
   modalHandler: 'collectorModal'},

   {id: '3', image: '/assets/images/carousel/promoter_control.jpg', title: 'Controle de Promotores',
   description: 'Gerencie e otimize o trabalho dos promotores de vendas que atuam no seu estabelecimento.',
   modalHandler: 'promoterControlModal'},

   {id: '4', image: '/assets/images/carousel/data_classification.jpg', title: 'Classificação de Produtos',
   description: '', modalHandler: 'dataClassificationModal'},
];

const Carousel: React.FC = (): ReactElement => {
   return (
      <Container>
         <Swiper slidesPerView={1} pagination={{clickable: true}} navigation={true}
         autoplay={true}>
            {images.map((item): ReactElement => (
               <SwiperSlide key={item.id}>
                  <DivModal>
                     <ImgOne src={item.image} />
                     <DivModalObjects>
                        <TitleTextModal>{item.title}</TitleTextModal>
                        <TextModal>{item.description}</TextModal>
                     </DivModalObjects>
                  </DivModal>
               </SwiperSlide>
            ))}
         </Swiper>
      </Container>
   )
}

export default Carousel;
