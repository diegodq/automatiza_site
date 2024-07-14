import React, {ReactElement} from 'react';
import { LogoSite, Link } from './styles';
import LogoHeaderSite from '/assets/images/logo2.svg';

const Logo: React.FC = (): ReactElement => {
  return <Link href='/'> <LogoSite src={LogoHeaderSite} /> </Link>
}

export default Logo;
