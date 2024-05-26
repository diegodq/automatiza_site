import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.tsx';
import {GlobalStyle} from './Styles.ts';
import {register} from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/css/autoplay';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <GlobalStyle />
      <App />
   </React.StrictMode>
);
