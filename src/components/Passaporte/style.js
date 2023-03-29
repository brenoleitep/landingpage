import styled from "styled-components";
import background from "../../assets/background.png";

export const StyledPassaporteDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  /* justify-content: center; */

  @media (min-width: 720px) {
    flex-direction: row;
    max-height: 100vw;
  }
`;

export const StyledDivPass = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 32px;
  z-index: 10;

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

export const StyledLottiePass = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  width: 500px;
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
