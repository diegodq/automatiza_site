import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
  height: 45px;
  background-color: #3D194F;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Address = styled.address`
  display: flex;
  align-items: center;
  font: .9rem bahnschriftRegular, sans-serif;
  color: #f5f3f2;
  text-decoration: none;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const SocialMedia = styled.div`

`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Li = styled.li`
  margin-left: 15px;
`;

export const Link = styled.a`
  font-size: 23px;
  color: #f5f3f2;

  & + & {
    margin-left: 20px;
  }
`;

export const MailTo = styled.a`
  display: flex;
  align-items: center;
  font: .9rem bahnschriftRegular, sans-serif;
  color: #f5f3f2;
  text-decoration: none;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Phone = styled.a`
  display: flex;
  align-items: center;
  font: .9rem bahnschriftRegular, sans-serif;
  color: #f5f3f2;
  text-decoration: none;
`;

export const MdLocationPinIcon = styled(MdLocationPin)`
  font-size: 20px;
  margin-right: 5px;
`;

export const FaPhoneAltIcon = styled(FaPhoneAlt)`
  font-size: 18px;
  margin-right: 5px;
`;

export const IoMdMailOpenIcon = styled(IoMdMailOpen)`
  font-size: 20px;
  margin-right: 5px;
`;
