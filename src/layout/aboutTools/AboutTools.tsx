import React, {ReactElement} from 'react';
import { Container, TitleSection, Div, Box, TitleBox, Description,
   CircleIcon, IoMdCheckmarkCircleIcon, TbPackagesIcon,FaLightbulbIcon,
   GrServicesIcon, FaMoneyBill1WaveIcon, FaClockIcon} from './Styles';

const AboutTools: React.FC = (): ReactElement => {
    return (
      <Container>
        <TitleSection>NOSSAS FERRAMENTAS</TitleSection>

        <Div>
          <Box>
            <CircleIcon>
              <IoMdCheckmarkCircleIcon />
            </CircleIcon>

            <TitleBox>Simplicidade</TitleBox>

            <Description>Nossas ferramentas são todas construídas no conceito UX de simplicidade, interativa e intuitiva. Sem dificuldade!</Description>
          </Box>

          <Box>
            <CircleIcon>
              <TbPackagesIcon />
            </CircleIcon>

            <TitleBox>Independência</TitleBox>

            <Description>Os microserviços são independentes, excluindo comportamentos indesejados após atualizações.</Description>
          </Box>

          <Box>
            <CircleIcon>
              <FaLightbulbIcon />
            </CircleIcon>

            <TitleBox>Tem alguma ideia?</TitleBox>

            <Description>Deixe-nos saber! Podemos desenvolver a solução para o seu processo especificamente!</Description>
          </Box>
        </Div>

        <Div>
          <Box>
            <CircleIcon>
              <GrServicesIcon />
            </CircleIcon>

            <TitleBox>Microserviços</TitleBox>

            <Description>Nossas soluções tem o objetivo de acabar com o uso de planilhas em processos simples do dia a dia. Ferramentas compactas e diretas!</Description>
          </Box>

          <Box>
            <CircleIcon>
              <FaMoneyBill1WaveIcon />
            </CircleIcon>

            <TitleBox>Valor Acessível</TitleBox>

            <Description>Por se tratar de microserviços, você não paga pelo que não pretende usar! Sem fidelidade, sem burocracia!</Description>
          </Box>

          <Box>
            <CircleIcon>
              <FaClockIcon />
            </CircleIcon>

            <TitleBox>Mais Tempo</TitleBox>

            <Description>Com processos seguros, automatizados e simples, tenha mais tempo para as coisas que realmente importam, o seu Negócio.</Description>
          </Box>
        </Div>
      </Container>
   )
}

export default AboutTools;
