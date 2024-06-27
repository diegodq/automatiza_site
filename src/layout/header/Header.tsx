import React, {ReactElement, useState} from 'react';
import { Container, LogoImg, Link } from './Styles';
import MenuIcon from '../../components/menuIcon/MenuIcon';
import MenuHeader from '../../components/menuHeader/MenuHeader';
import LogoHeaderSite from '/assets/images/logo3.svg';
import ShoppingKart from '../../components/shoppingKart/ShoppingKart';

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
      <Link href='/'>
        <LogoImg src={LogoHeaderSite} />
      </Link>
      <MenuHeader isActive={isActive} toggleActive={toggleActive} />
      <ShoppingKart />
      <MenuIcon toggleActive={toggleActive} />
    </Container>
  )
}

export default Header;
