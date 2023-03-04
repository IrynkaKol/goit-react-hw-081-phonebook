import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const Input = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  
  border-radius: 12px;
  &:hover, &:focus {
    outline:none;
    background-color: #008CBA;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);;
  }
`;
export const Button = styled.button`
  padding: 10px;
  border-radius: 12px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  
  &:hover, &:focus {
    background-color: #008CBA;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);`;