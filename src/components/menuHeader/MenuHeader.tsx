import React, {ReactElement} from 'react';
import { Nav, Ul, Li, Link, FaUserIcon } from './Styles.ts';
import CloseMenu from '../closeMenu/CloseMenu.tsx';

interface MenuProps {
  isActive: boolean;
  toggleActive: () => void;
}

const MenuHeader: React.FC<MenuProps> = ({ isActive, toggleActive }: MenuProps): ReactElement => {
  return (
    <Nav className={isActive ? 'active' : ''}>
      <CloseMenu onClick={toggleActive} />

      <Ul>
        <Li> <Link href="/">INÍCIO</Link> </Li>
        <Li> <Link href="#about">QUEM SOMOS</Link> </Li>
        <Li> <Link href="#solutions">SOLUÇÕES</Link> </Li>
        <Li> <Link href="#contact">CONTATO</Link> </Li>
        <Li> <Link target="blank" href="https://app.automatizafacil.com.br"><FaUserIcon />ÁREA DO CLIENTE</Link> </Li>
      </Ul>
    </Nav>
  )
}

export default MenuHeader;
