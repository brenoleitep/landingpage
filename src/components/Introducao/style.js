import styled, { keyframes } from "styled-components";
import background from "../../assets/planet.png";

export const StyledDiv = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  /* background: #000211; */
  /* background: url(${background}); */
  /* background-position: top; */
  color: white;
  height: 110vh;
  /* width: 100vw; */
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  gap: 36px;

  button {
    width: 90%;
    height: 47px;
    border-radius: 14px;
    max-width: 300px;
    background-color: #0046c7;
    outline: none;
    border: none;
    color: white;
    font-weight: lighter;
    font-size: 16px;
    z-index: 10;
    // margin-top: 10px;
  }

  h3 {
    font-size: 12px;
    letter-spacing: 0px;
    color: #ffffff;
    font-weight: 700;
  }
`;

export const StyledDivTitles = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  // text-align: center;
  z-index: 10;
  margin-top: 40px;

  h2 {
    font-size: 24px;
    letter-spacing: -1px;
    color: #ffffff;
    font-weight: 700;
  }
`;

export const StyledLottie = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: flex-end;
  bottom: -40px;
  z-index: 0;
`;

export const StyledLogo = styled.div`
  img {
    width: 225px;
    height: 100px;
  }
`;

export const StyledLotties = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: flex-end;
  top: 10px;
  z-index: 0;
`;

export const StyledYoutube = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 10;

  img {
    max-width: 720px;
    width: 90%;
    border-radius: 20px;
  }
`;

export const TypingText = styled.span`
  display: inline-block;
`;
