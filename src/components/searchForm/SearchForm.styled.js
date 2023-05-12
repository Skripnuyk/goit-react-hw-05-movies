import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  height: 28px;
  width: 28px;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
  :hover,
  :active {
    background-color: #1111;
  }
`;

export const SearchFormButtonLabel = styled.span`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
`;

export const SearchFormInput = styled.input`
  width: 200px;
  height: 28px;
  border-radius: 4px;
  font-size: 14px;
`;