import React from 'react';
import {Container, ImgOne, DivModal, DivModalObjects, TitleTextModal, TextModal, ReadMoreButtonModal} from './Styles.ts';
import {Swiper, SwiperSlide} from 'swiper/react';

const images = [
   {id: '1', image: '/assets/images/carousel/nps_carousel.jpg', title: 'Pesquisa de Satisfação', description: 'Conheça o seu cliente e veja o que ele pensa da sua empresa e como está sendo a experiência com o seus produtos ou serviços.', buttonText: 'Saiba mais', modalHandler: 'npsModal'},
   {id: '2', image: '/assets/images/carousel/app_collector.jpg', title: 'App Coletor de Dados', description: 'O app Meu Coletor de Dados permite transformar o seu smartphone em um equipamento para a coleta de dados.', buttonText: 'Saiba mais', modalHandler: 'collectorModal'},
   {id: '3', image: '/assets/images/carousel/promoter_control.jpg', title: 'Controle de Promotores', description: 'Gerencie e otimize o trabalho dos promotores de vendas que atuam no seu estabelecimento.', buttonText: 'Saiba mais', modalHandler: 'promoterControlModal'},
   {id: '4', image: '/assets/images/carousel/data_classification.jpg', title: 'Classificação de Produtos', description: '', buttonText: 'Saiba mais', modalHandler: 'dataClassificationModal'},
];

const Carousel: React.FC = () => {
   return (
      <Container>
         <Swiper slidesPerView={1} pagination={{clickable: true}} navigation={true}
         autoplay={true}>
            {images.map((item) => (
               <SwiperSlide key={item.id}>
                  <DivModal>
                     <ImgOne src={item.image} />
                     <DivModalObjects>
                        <TitleTextModal>{item.title}</TitleTextModal>
                        <TextModal>{item.description}</TextModal>
                        <ReadMoreButtonModal onClick={() => console.log('open modal') }>{item.buttonText}</ReadMoreButtonModal>
                     </DivModalObjects>
                  </DivModal>
               </SwiperSlide>
            ))}
         </Swiper>
      </Container>
   )
}

export default Carousel;
