import styled from 'styled-components';

export const Form = styled.form`
  width: 40vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: black;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5px;
  padding-left: 30px;
`;

export const Input = styled.input`
  border-radius: 25px;
  border: 1px solid lightgray;
  padding: 10px 5px;
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  border-radius: 25px;
  height: 180px;
  padding: 10px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border-radius: 25px;
  padding: 10px 0;
  background-color: deepskyblue;
  color: white;
  font-weight: bold;
  border: none;
`;
