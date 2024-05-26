import {Container, TitleSection, Div, Box, StatisticNumber, Text, ButtonService, FaArrowRightIon} from './Styles.ts';
import React, {ReactElement} from 'react';

const Statistic: React.FC = (): ReactElement => {
   return (
      <Container>
         <TitleSection>Pequenas e médias empresas que utilizam nossa plataforma já tiveram até:</TitleSection>
         <Div>
            <Box>
               <StatisticNumber>45%</StatisticNumber>
               <Text>de ganho em velocidade <br />nas tomadas de decisões</Text>
            </Box>

            <Box>
               <StatisticNumber>43%</StatisticNumber>
               <Text>de redução na taxa <br/> de perda de clientes</Text>
            </Box>

            <Box>
               <StatisticNumber>47%</StatisticNumber>
               <Text>de ganho em tempo  <br />e eficiência</Text>
            </Box>
         </Div>

         <ButtonService href="#contact">Entre em contato <FaArrowRightIon /></ButtonService>
      </Container>
   )
}

export default Statistic;
