import React, {ReactElement} from 'react';
import { IoCloseSharpIcon } from './styles';

interface CloseProps {
  onClick: () => void;
}

const CloseMenu: React.FC<CloseProps> = ({ onClick }: CloseProps): ReactElement => {
  return <IoCloseSharpIcon onClick={onClick} />
}

export default CloseMenu;
