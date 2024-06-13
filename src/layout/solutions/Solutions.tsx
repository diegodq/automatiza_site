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
                     <h1 style={{textAlign: 'center', font: '1.2rem Arial, sans-serif', marginBottom: '15px'}}>Pesquisa de Satisfação - NPS</h1>
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
                     <Li> <ParagraphNPS><FaCheckIcon />Faça a contagem dos produtos através de inventários com e sem consulta.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Faça contagens dos produtos pelo tablete, celular, ou coletor de dados.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Configure o layout exigido pelo seu ERP de forma simples e dinâmico.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Layouts dinâmicos para importação e exportação.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Trabalhe com vários dispositivos em um mesmo inventário.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon />Adquira a licença temporária por dispositivo e pague de acordo com a sua demanda.</ParagraphNPS> </Li>
                  </Ul>

                  <ReadMoreButton onClick={() => openModalHandler('collectorModal')}>Saiba mais<FaChevronRightIcon /></ReadMoreButton>

                  <Modal isOpen={openModal === 'collectorModal'} onClose={closeModalHandler}>
                    <h1 style={{textAlign: 'center', font: '1.2rem Arial, sans-serif', marginBottom: '15px'}}>App coletor de Dados</h1>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      O app Meu Coletor de Dados permite transformar o seu smartphone em um equipamento para a coleta de dados, integrado de forma nativa aos módulos de Estoque e Custos,
                      e de Compras e Faturamento. Com isso, você reduz custos na automação de processos de logística interna, podendo instalar mais aparelhos, se necessário.
                    </p>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      O aplicativo permite acompanhar a movimentação de produtos desde a chegada até a saída dos itens. Por meio da câmera do celular,
                      você pode bipar produtos pelo código de barra ou QR Code na etiqueta dos itens ou das caixas, facilitando a movimentação do seu estoque de itens.
                      Desse modo, você evita processos manuais e reduz a possibilidade de erros em seus registros.
                    </p>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      O app Meu Coletor de Dados permite fazer a convocação dos operadores, atribuindo tarefas e gerenciando melhor as equipes nas rotinas de logística interna.
                      Além disso, o aplicativo também funciona em modo offline.
                      Assim, se a conexão de internet cair, você não precisa interromper sua operação, e pode fazer a sincronização dos dados mais tarde, quando a conexão for restabelecida.
                    </p>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      E caso haja algum tipo de falha na sincronização, o app emite uma notificação para o celular do usuário. Assim, você nunca fica sem as informações necessárias para sua operação.
                    </p>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      O app Meu Coletor de Dados está disponível na plataforma Android e IoS proporciona mais agilidade e eficiência em processos de logística interna.
                      A interface é simples e amigável, facilitando a rotina de operação.
                    </p>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      O app Meu Coletor de Dados também proporciona alta capacidade de escala, permitindo atender operações de pequeno e grande porte.
                      O aplicativo pode ser contratado por assinatura.
                    </p>
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
                     <h1 style={{textAlign: 'center', font: '1.2rem Arial, sans-serif', marginBottom: '15px'}}>Controle de Promotores</h1>
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

                  <TaleDescription>Mantenha o fiscal da sua empresa organizado e atualizado.</TaleDescription>

                  <Ul>
                     <Li> <ParagraphNPS><FaCheckIcon/>Higienização do cadastro de produtos e Padronização da descrição dos produtos.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon/>Classificação Mercadológica de Produtos.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon/>Classificação Fiscal de Saída-Venda para consumidor final.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon/>Treinamento e orientações nos regime: Simples Nacional, Lucro Presumido e Lucro Real.</ParagraphNPS> </Li>
                     <Li> <ParagraphNPS><FaCheckIcon/>Backup em Nuvem e monitoramento dos uploads dos arquivos de Backup.</ParagraphNPS> </Li>
                  </Ul>

                  <ReadMoreButton onClick={() => openModalHandler('dataClassificationModal')}>Saiba mais<FaChevronRightIcon /></ReadMoreButton>

                  <Modal isOpen={openModal === 'dataClassificationModal'} onClose={closeModalHandler}>
                    <h1 style={{textAlign: 'center', font: '1.2rem Arial, sans-serif', marginBottom: '15px'}}>Classificação de Produtos</h1>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      Um dos maiores desafios das redes varejistas do ramo de supermercados e afins é a manutenção de uma base de cadastro de produtos corretamente classificada tanto para as
                      contribuições para o PIS e COFINS quanto em relação ao ICMS, o já tradicional imposto estadual que a dia modifica suas regras e exige atualização constante da equipe fiscal das empresas.
                    </p>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      Muitas empresas não conseguem sobreviver ao primeiro ano de funcionamento, simplesmente por não entenderem bem em qual regime fiscal se encaixam e não levantarem
                      corretamente seus tributos a recolher. Essa problemática coloca os negócios numa situação menos favorável diante dos concorrentes.
                    </p>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      Uma das principais fontes de risco para a atividade empresarial é o tratamento inadequado da classificação fiscal das mercadorias. Esse risco tem duas faces: de um lado, a
                      exacerbação do custo financeiro resultante de carga tributária maior que a devida e da sujeição a
                      multas, e de outro lado, a perda de vantagens proporcionadas pela legislação tributária.
                      O primeiro tipo de risco ficou agravado pela implantação do SPED.
                    </p>
                    <p style={{font: '1rem Arial, sans-serif', textIndent: '1em'}}>
                      A M&F Assessoria Fiscal tem por objetivo firmar uma parceria com a sua empresa oferecendo total apoio na classificação fiscal do seu mix de produtos.
                      A assessoria começa desde o ajuste inicial de todo o mix de produtos e se fortalece no acompanhamento periódico de novos
                      produtos cadastros. A M&F assessoria também será responsável por classificar os produtos que
                      por novas demandas e obrigações fiscais necessitem de alterações.
                    </p>
                  </Modal>
               </Tale>

               <Badge>Em desenvolvimento</Badge>
            </DivTaleImg>
         </Div>
      </Container>
   )
}

export default Solutions;
