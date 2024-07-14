import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 0;
`;

export const TitleSection = styled.h2`
  text-align: center;
  font: 1.6rem bahnschriftBold, sans-serif;
`;

export const ListImages = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  margin-top: 40px;
`;

export const Images = styled.img`
  & + & {
    margin-left: 20px;
  }
`;
