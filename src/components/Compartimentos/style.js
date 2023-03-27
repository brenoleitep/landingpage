import styled from "styled-components";

export const StyledCompartimentos = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 34px;
  /* height: 100vh; */

  h2 {
    font-size: 35px;
    letter-spacing: -1px;
    color: #0046c7;
    font-weight: 700;
    text-align: center;
    z-index: 10;
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    z-index: 10;
  }

  svg {
    width: 50px;
    height: 50px;
    color: white;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: justify;
  width: 90%;
  max-width: 500px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    max-width: 220px;
  }
`;

export const StyledLottieComp = styled.div`
  position: absolute;
  right: 10px;
  height: 500px;
  width: 550px;

  svg {
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
