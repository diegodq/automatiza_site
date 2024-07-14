import { FaUser } from 'react-icons/fa';
import styled from 'styled-components';

export const Nav = styled.nav`
  @media (max-width: 840px) {
    position: fixed;
    right: -100%;
    transition: all .3s;
    top: 0;
    background-color: #303D3D;
    height: 100vh;
    width: 270px;
    color: #F2F2F2;
    z-index: 9999;
  }

  &.active
  {
    right: 0;
  }
`;

export const Ul = styled.ul`
  display: flex;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
  }
`;

export const Li = styled.li`
  & + & {
    margin-left: 10px;
  }

  @media (max-width: 840px) {
    & + & {
      margin-left: 0;
      margin-top: 17px;
    }
  }
`;

export const Link = styled.a`
  font: 1.1rem bahnschriftRegular, sans-serif;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  color: #303D3D;

  @media (max-width: 840px) {
    color: #F8F8F8;
  }

  &:hover {
    color: red;
  }
`;

// icons
export const FaUserIcon = styled(FaUser)`
  margin-right: 4px;
`;
