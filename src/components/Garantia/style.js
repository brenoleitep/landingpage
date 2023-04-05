import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledGarantia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  h2 {
    font-size: 55px;
    letter-spacing: -1px;
    color: #0046c7;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
  }

  p {
    font-size: 16px;
    letter-spacing: 1px;
    color: white;
    font-weight: lighter;
    text-align: center;
  }

  img {
    width: 90%;
    max-width: 360px;
    animation: ${rotate360} 30s linear infinite;
  }
`;
