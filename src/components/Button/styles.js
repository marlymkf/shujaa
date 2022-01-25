import styled from "styled-components";

export const Botao = styled.button`
  background: #623cea;
  border-radius: 3px;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin: 0px 10px;
  padding: 19px 20px;
  cursor: pointer;
  color: #fff;
  border: 0;

  &.botao-1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
  }
  @media (max-width: 1200px) {
    &.botao-1 {
      width: 95%;
      max-width: 269px;
      margin: 0;
    }
  }
  @media (max-width: 767px) {
    &.botao-1 {
      width: 100%;
      margin: 0;
      max-width: 100%;
    }
  }
`;
