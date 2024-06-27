import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  max-width: 700px;
  margin:25px auto;
  padding-left: 20px;
  padding-right: 35px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #F2F2F2;
  height: 38px;
  outline: none;
  border: 2px solid #bfbfbf;
  font: .9rem bahnschriftRegular, sans-serif;
  padding-left: 10px;

  &.input_error {
  border: 2px solid red;
  }
`;

export const ErrorMessage = styled.p`
  font: .9rem bahnschriftRegular, sans-serif;
  color: red;
  margin-top: 7px;
`;

export const DivInput = styled.div`
 & + & {
    margin-top:20px;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px 50px;
  cursor: pointer;
  background-color: #F2F2F2;
  border: 2px solid #bfbfbf;
  font: bold 1rem bahnschriftRegular, sans-serif;
  margin-top: 20px;

  &:hover {
    background-color: red;
    color: white;
    transition: .3s ease-in-out;
    border: 2px solid red;
  }
`;

export const TextArea = styled.textarea`
  height: 100px;
  width: 100%;
  background-color: #F2F2F2;
  max-width: 100%;
  outline: none;
  resize: none;
  border: 2px solid #bfbfbf;
  font: .9rem bahnschriftRegular, sans-serif;
  padding-left: 10px;
  padding-top: 5px;

  &.text_area_error {
    border: 2px solid red;
  }
`;
