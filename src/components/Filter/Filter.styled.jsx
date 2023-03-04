import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 15px 0;
  box-sizing: border-box;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  border-radius: 12px;

  &:hover,
  &:focus {
    outline: none;
    background-color: #008cba;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
