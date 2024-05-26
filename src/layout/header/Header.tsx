import React, {ReactElement, useState} from 'react';
import { Container } from './Styles';
import Logo from '../../components/logo/Logo';
import MenuIcon from '../../components/menuIcon/MenuIcon';
import MenuHeader from '../../components/menuHeader/MenuHeader';

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
         <Logo />
         <MenuHeader isActive={isActive} toggleActive={toggleActive} />
         <MenuIcon toggleActive={toggleActive} />
      </Container>
   )
}

export default Header;
