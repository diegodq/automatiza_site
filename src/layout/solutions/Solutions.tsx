import React, {ReactElement, useState} from 'react';
import Modal from '../../components/modal/Modal.tsx';

import {Container, TitleSection, SubTitleSection, Tale, TitleTale,
   TaleDescription, TaleImg, Div, ParagraphNPS, Ul, Li, ReadMoreButton,
   FaCheckIcon, FaChevronRightIcon, DivTaleImg, Badge} from './Styles.ts';

import NPSImage from '/assets/images/nps.jpg';
import collectorImage from '/assets/images/app_coletor.jpg';
import promoterControl from '/assets/images/promoter_control.jpg';
import dataClassification from '/assets/images/data_classification.jpg';

type openModalType = {
   (modalName: string): void;
}

type CloseModal = {
   (): void;
}

const Solutions: React.FC = (): ReactElement => {
   const [openModal, setOpenModal] = useState<string | null>(null);

   const openModalHandler: openModalType = (modalName: string): void => {
      setOpenModal(modalName);
   }

   const closeModalHandler: CloseModal = (): void => {
      setOpenModal(null);
   }

   return (
      <Container id="solutions">
         <TitleSection>NOSSAS SOLUÇÕES</TitleSection>
         <SubTitleSection>Conheça as soluções que desenvolvemos para facilitar a gestão e o seu dia a dia:</SubTitleSection>

         <Div>
            <DivTaleImg>
               <TaleImg src={NPSImage} />
               <Tale>
                  <TitleTale>Pesquisa de Satisfação</TitleTale>

                  <TaleDescription>Conheça o seu cliente e veja o que ele pensa da sua empresa e como está sendo a experiência com o seus produtos ou serviços.</TaleDescription>

                  <Ul>
                     <Li> <ParagraphNPS><FaCheckIcon />Desenvolva pesquisas personalizadas para o seu negócio.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Defina a ordem e obrigatoriedade das perguntas e respostas.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Informações em tempo real na palma da mão.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Acesso via QrCode</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Baixo custo de investimento e retorno garantido.</ParagraphNPS> </Li>
                  </Ul>

                  <ReadMoreButton onClick={() => openModalHandler('npsModal')}>Saiba mais<FaChevronRightIcon /> </ReadMoreButton>

                  <Modal isOpen={openModal === 'npsModal'} onClose={closeModalHandler}>
                     <h1 style={{textAlign: 'center', font: '1.2rem Arial, sans-serif', marginBottom: '15px'}}>PESQUISA DE SATISFAÇÃO - NPS</h1>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>A Automatiza Fácil, pensando no fortalecimento contínuo da sua marca desenvolveu uma aplicação que ouve o seu cliente. Assim como você, nos da Automatiza Fácil também sabemos a importância da informação no dia a dia.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>Conhecer o nosso cliente, o que ele pensa de nós e como está sendo sua experiência com os nossos produtos e serviços é de indiscutível relevância. Além de nos diferenciar dos nossos concorrentes também permite um melhor relacionamento com o cliente.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>Quando ouvimos nossos clientes mostramos o quanto nos importamos com eles e o quanto a sua satisfação é importante para a empresa. Além dos pontos já relatados, é uma ótima estratégia para a empresa obter informações que permitam aprimorar seus produtos e serviços. Conhecer o seu cliente é fortalecer a cada dia sua marca, seus produtos e serviços.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>Com base nestas premissas, desenvolvemos uma ferramenta simples, flexível e acessível a qualquer tempo e de qualquer lugar.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>Utilizando a nossa ferramenta “PESQUISA DE SATISFAÇÃO-NPS”, descomplicada como a Automatiza Fácil, construa de maneira fácil e rápida a pesquisa de satisfação que mais se adeque ao seu negócio e ao seu momento e monitore em tempo real o que seus clientes pensam da sua empresa.</p>
                  </Modal>
               </Tale>
            </DivTaleImg>

            <DivTaleImg>
               <TaleImg src={collectorImage} />
               <Tale>
                  <TitleTale>App Coletor de Dados</TitleTale>

                  <TaleDescription>O app Meu Coletor de Dados permite transformar o seu smartphone em um equipamento para a coleta de dados. Com isso, você reduz custos na automação de processos de logística interna, podendo instalar mais aparelhos, se necessário.</TaleDescription>

                  <Ul>
                     <Li> <ParagraphNPS><FaCheckIcon />Conferência Física de Recebimento.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Endereçamento de Armazenagem.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Transferência de Produtos.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Separação e Expedição de Produtos.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Inventário.</ParagraphNPS> </Li>
                  </Ul>

                  <ReadMoreButton onClick={() => openModalHandler('collectorModal')}>Saiba mais<FaChevronRightIcon /></ReadMoreButton>

                  <Modal isOpen={openModal === 'collectorModal'} onClose={closeModalHandler}>
                     Content in development
                  </Modal>
               </Tale>

               <Badge>Em desenvolvimento</Badge>
            </DivTaleImg>

            <DivTaleImg>
               <TaleImg src={promoterControl} />
               <Tale>
                  <TitleTale>Controle de Promotores</TitleTale>

                  <TaleDescription>O aplicativo de controle de promotores de produto de supermercados é a nossa ferramenta projetada para gerenciar e otimizar o trabalho dos promotores de vendas que atuam no seu estabelecimento.</TaleDescription>

                  <Ul>
                     <Li> <ParagraphNPS><FaCheckIcon />Gestão de Tarefas e Rotinas.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Relatórios e Coleta de Dados.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Check-in e Check-out.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Comunicação entre Promotores e Gerentes.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Feedback e Avaliações.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Controle de Inventário.</ParagraphNPS> </Li>

                  </Ul>

                  <ReadMoreButton onClick={() => openModalHandler('promoterControlModal')}>Saiba mais<FaChevronRightIcon /></ReadMoreButton>

                  <Modal isOpen={openModal === 'promoterControlModal'} onClose={closeModalHandler}>
                     <h1 style={{textAlign: 'center', font: '1.2rem Arial, sans-serif', marginBottom: '15px'}}>App Coletor de
                        Dados</h1>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>Um aplicativo de controle de promotores de
                        produto de supermercados é a nossa ferramenta projetada para gerenciar e otimizar o trabalho dos promotores de
                        vendas que atuam no seu estabelecimento. Esses promotores são responsáveis por diversas atividades, como
                        organizar e exibir produtos, realizar degustações, coletar informações sobre as vendas e interagir com os
                        clientes. Nosso aplicativo facilita essas tarefas e oferece várias funcionalidades importantes, como:</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>2. Gestão de Tarefas e Rotinas: Permite aos
                        gerentes designar tarefas específicas aos promotores e monitorar a execução dessas tarefas em tempo real.
                        Os promotores podem acessar suas listas de tarefas diárias diretamente no aplicativo.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>3. Check-in e Check-out: Utiliza geolocalização para registrar
                        a chegada e saída dos promotores nos supermercados, garantindo que eles estão cumprindo suas horas de trabalho e visitando os locais designados.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>4. Auditorias e Inspeções: O aplicativo pode ser usado para realizar auditorias no ponto de venda,
                        verificando a disposição dos produtos, preços, validade e outras informações relevantes.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>5. Comunicação: Facilita a comunicação entre gerentes e promotores através de mensagens, notificações e alertas.
                        Isso ajuda a resolver problemas rapidamente e a garantir que todos estejam alinhados com os objetivos da promoção.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>6. Treinamento e Suporte: Oferece módulos de treinamento e recursos de suporte para ajudar os promotores a
                        desempenharem suas funções de maneira mais eficiente e informada.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>7. Feedback e Avaliações: Os promotores podem fornecer feedback sobre suas experiências e desempenho,
                        e os gerentes podem avaliar o desempenho dos promotores, identificando áreas que precisam de melhorias.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>8. Controle de Inventário: Ajuda a monitorar o estoque de produtos no ponto de venda, garantindo que os promotores
                        possam solicitar reposições antes que os produtos acabem.</p>
                     <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>Essas funcionalidades ajudam a aumentar a eficiência operacional, melhorar a precisão dos dados coletados,
                        otimizar a alocação de recursos e, em última análise, aumentar as vendas e a satisfação do cliente no ambiente de supermercado.</p>
                  </Modal>
               </Tale>

               <Badge>Em desenvolvimento</Badge>
            </DivTaleImg>
         </Div>

         <Div>
            <DivTaleImg>
               <TaleImg src={dataClassification}/>
               <Tale>
                  <TitleTale>Classificação de Produtos</TitleTale>

                  <TaleDescription>Conheça o seu cliente e veja o que ele pensa da sua empresa e como está sendo a experiência com
                     o seus produtos ou serviços.</TaleDescription>

                  <Ul>
                     <Li> <ParagraphNPS><FaCheckIcon/>Desenvolva pesquisas personalizadas para o seu negócio.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon/>Defina a ordem e obrigatóriedade das perguntas e respostas.</ParagraphNPS>
                     </Li>
                     <Li> <ParagraphNPS><FaCheckIcon/>Informações em tempo real na palma da mão.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon/>Acesso via QrCode</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon/>Baixo custo de investimento e retorno garantido.</ParagraphNPS> </Li>
                  </Ul>

                  <ReadMoreButton onClick={() => openModalHandler('dataClassificationModal')}>Saiba mais<FaChevronRightIcon /></ReadMoreButton>

                  <Modal isOpen={openModal === 'dataClassificationModal'} onClose={closeModalHandler}>Content in development</Modal>
               </Tale>

               <Badge>Em desenvolvimento</Badge>
            </DivTaleImg>
         </Div>
      </Container>
   )
}

export default Solutions;
