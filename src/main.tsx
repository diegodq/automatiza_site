import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.tsx';
import {GlobalStyle} from './Styles.ts';
import {register} from 'swiper/element/bundle';
import Provider from './context/Provider.tsx';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/css/autoplay';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <GlobalStyle />
      <Provider>
        <App />
      </Provider>
   </React.StrictMode>
);
