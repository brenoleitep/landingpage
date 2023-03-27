import styled from "styled-components";
import background from "../../assets/background.png";

export const StyledPassaporteDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  @media (min-width: 720px) {
    flex-direction: row;
    height: 50vw;
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
    color: #0046c7;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 26px;
    letter-spacing: 1px;
    color: #ffffff;
    font-weight: lighter;
  }
`;

export const StyledLottiePass = styled.div`
  position: absolute;
  /* min-width: 50vw; */
  z-index: 0;
`;
