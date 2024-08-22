import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Div = styled.div`
  &.containerImg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
  }
`;

export const Title = styled.h3`
  font: bold 1.4rem bahnschriftBold, sans-serif;
  display: block;
  text-align: center;
`;

export const Text = styled.p`
  font: 1.1rem bahnschriftBold, sans-serif;
  display: block;
  text-align: center;
  margin-bottom: 15px;
`;

export const Img = styled.img`
  width: 100%;
`;