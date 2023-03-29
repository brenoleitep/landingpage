import styled, { keyframes } from "styled-components";
import background from "../../assets/planet.png";

export const StyledDiv = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  min-height: 100vh;

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
  }

  h3 {
    font-size: 16px;
    letter-spacing: 0px;
    color: #ffffff;
    font-weight: 700;
    text-align: justify;
  }
`;

export const StyledDivTitles = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 36px;
  z-index: 10;
  margin-top: 40px;

  @media (min-width: 1080px) {
    width: 50%;
  }

  h2 {
    font-size: 28px;
    letter-spacing: -1px;
    color: #ffffff;
    font-weight: 700;
    text-align: justify;
  }
`;

export const StyledLottie = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: flex-end;
  bottom: -40px;
  z-index: 0;

  @media (max-width: 1080px) {
    display: none;
  }
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
  align-items: center;
  justify-content: flex-end;
  top: 10px;
  z-index: 0;
  width: 50%;
  right: 0px;
  height: 100%;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const StyledYoutube = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 10;

  img {
    max-width: 720px;
    width: 100%;
    border-radius: 20px;
  }
`;

export const TypingText = styled.span`
  display: inline-block;
`;

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const LogoFixed = styled.div`
  position: fixed;
  right: 30px;
  bottom: 20px;
  background-color: #0046c7;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;

  img {
    width: 150px;
    height: 75px;
  }

  @media (max-width: 1200px) {
    display: none;
  }

  animation: ${bounceAnimation} 0.5s infinite;
`;
