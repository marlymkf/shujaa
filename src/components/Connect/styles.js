import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    img {
      display: none;
    }
  }
`;

export const H1 = styled.h1`
  color: #000000;
  font-weight: 600;
  font-size: 48px;
  line-height: 62px;
  max-width: 672px;
  margin-bottom: 30px;
  margin-left: 10px;

  @media (max-width: 1200px) {
    max-width: 420px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    font-size: 48px;
  }

  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 42px;
    margin-bottom: 20px;
    margin-left: 0;
  }
`;
export const Texto = styled.p`
  color: #333333;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  max-width: 637px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    max-width: 420px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    font-size: 28px;
    margin-bottom: 50px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 25px;
    margin-left: 0;
  }
`;
export const Input = styled.input`
  color: #787676;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  max-width: 364px;
  background: #f8f8f8;
  border: 1px solid rgba(227, 227, 227, 0.8);
  border-radius: 3px;
  padding: 23px 18px;
  max-width: 364px;
  width: 100%;

  @media (max-width: 1200px) {
    margin-bottom: 30px;
  }
  @media (max-width: 900px) {
    margin-right: 40px;
    max-width: 420px;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;
