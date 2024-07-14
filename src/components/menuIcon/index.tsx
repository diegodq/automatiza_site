import React, {ReactElement} from 'react';
import { TbMenuDeepIcon } from './styles.ts';

interface MenuIconProps {
  toggleActive: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ toggleActive }: MenuIconProps): ReactElement => {
  return <TbMenuDeepIcon onClick={ toggleActive } />
}

export default MenuIcon;
