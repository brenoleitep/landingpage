import styled from "styled-components";
import background from "../../assets/background.svg";

export const StyledDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-image: url(${background});
  color: white;
  height: 95vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  gap: 64px;

  button {
    width: 90%;
    height: 47px;
    border-radius: 14px;
    max-width: 300px;
    background-color: #000211;
    outline: none;
    border: none;
    box-shadow: 0px 0px 6px 1px white;
    color: white;
    font-weight: lighter;
    font-size: 16px;
    z-index: 10;
  }
`;

export const StyledDivTitles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  z-index: 10;
  margin-top: 80px;

  h1 {
    font-size: 28px;
    font-weight: lighter;
  }

  h2 {
    font-size: 12px;
    font-weight: lighter;
  }
`;

export const StyledLottie = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: flex-end;
  bottom: 10px;
  z-index: 0;
`;
export const StyledLotties = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: flex-end;
  top: 20px;
  z-index: 0;
`;

export const StyledYoutube = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  img {
    max-width: 720px;
    width: 90%;
    border-radius: 20px;
  }
`;
