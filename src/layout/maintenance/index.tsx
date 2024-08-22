import { ReactElement } from "react";
import { Container, Div, Img, Title, Text } from "./styles";

const maintenanceImage = '/assets/images/under_maintenance.png';

const Maintenance: React.FC = (): ReactElement => {
  return (
    <Container>
      <Div className="containerImg">
        <Title>MANUTENÇÃO</Title>
        <Text>Desculpe o transtorno. Nossos sistemas estão em manutenção no momento.</Text>
        <Img src={maintenanceImage} alt="Estamos sob manutenção."/>
      </Div>
    </Container>
  )
}

export default Maintenance;