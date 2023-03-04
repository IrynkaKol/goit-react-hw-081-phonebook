import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: none;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  display: block;
  max-width: 100%;
  height: auto;
`;
export const Contact = styled.div`
  font-size: 15px;
  display: flex;
`;
export const Wrapper = styled.div`
  text-align: left;
  margin-left: 10px;
`;

export const Button = styled.button`
  margin-left: 15px;
  padding: 5px;
  border-radius: 12px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  font-size: 10px;
  display: inline-block;
  width: 85px;
height: 25px;
 
  
  &:hover, &:focus {
    background-color: #008CBA;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;
