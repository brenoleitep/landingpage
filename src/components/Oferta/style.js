import styled from "styled-components";

export const StyledDivOferta = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const StyledTextOferta = styled.div`
  margin: 0 auto;
  background-color: white;
  width: 80%;
  color: #09061e;
  margin-top: 10px;
  padding: 10px;
  font-weight: 700;
  border-radius: 10px;
`;

export const StyledDivPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
`;

export const StyledDivisor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;

  @media (max-width: 1080px) {
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  h2 {
    font-size: 40px;
    letter-spacing: -1px;
    color: white;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 16px;
    letter-spacing: 1px;
    color: #ffffff;
    font-weight: lighter;
    width: 100%;
    max-width: 600px;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    gap: 24px;
  }

  li {
    color: white;
  }

  h3 {
    font-size: 24px;
    letter-spacing: -1px;
    color: white;
    font-weight: 700;
    text-align: center;
    text-decoration: line-through;
  }

  h4 {
    font-size: 22px;
    letter-spacing: -1px;
    color: white;
    font-weight: 700;
    text-align: center;
  }

  span {
    font-size: 18px;
    letter-spacing: -1px;
    color: #0046c7;
    font-weight: 700;
    text-align: center;
  }

  h6 {
    letter-spacing: -1px;
    color: #0046c7;
    font-weight: 700;
    text-align: center;
    font-size: 80px;
  }

  button {
    width: 100%;
    max-width: 440px;
    height: 64px;
    border-radius: 14px;
    background-color: #0046c7;
    outline: none;
    border: none;
    color: white;
    font-weight: 700;
    font-size: 24px;
    z-index: 10;
    cursor: pointer;
  }
`;

export const LottieDivOferta = styled.div`
  width: 50%;

  @media (max-width: 1200px) {
    display: none;
  }
`;
