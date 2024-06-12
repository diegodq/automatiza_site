import React, {ReactElement, useState} from 'react';
import { Container, DivLogo, LogoImg } from './Styles';
import MenuIcon from '../../components/menuIcon/MenuIcon';
import MenuHeader from '../../components/menuHeader/MenuHeader';
import LogoHeaderSite from '/assets/images/logo2.svg';

type FunctionType = {
   (): void
}

const Header: React.FC = (): ReactElement => {
   const [isActive, setIsActive] = useState(false);

   const toggleActive: FunctionType = () => {
      setIsActive(!isActive);
   }

   return (
      <Container>
        <DivLogo href='/'>
          <LogoImg src={LogoHeaderSite} />
        </DivLogo>

        <MenuHeader isActive={isActive} toggleActive={toggleActive} />
        <MenuIcon toggleActive={toggleActive} />
      </Container>
   )
}

export default Header;
