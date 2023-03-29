import styled from "styled-components";

export const StyledDivMetodos = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 32px;
  min-height: 100vh;
  position: relative;

  @media (max-width: 1080px) {
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  h2 {
    font-size: 35px;
    letter-spacing: -1px;
    color: white;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 24px;
    letter-spacing: 1px;
    color: #ffffff;
    font-weight: lighter;
    width: 100%;
    max-width: 600px;
    text-align: justify;
  }
`;

export const StyledLottieMetodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  width: 50%;
  height: 800px;

  svg {
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
