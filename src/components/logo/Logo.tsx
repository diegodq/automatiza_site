import React, {ReactElement} from 'react';
import { LogoSite, Link } from './Styles';
import LogoHeaderSite from '/assets/images/logo.svg';

const Logo: React.FC = (): ReactElement => {
   return <Link href='/'> <LogoSite src={LogoHeaderSite} /> </Link>
}

export default Logo;
