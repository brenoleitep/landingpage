import styled from "styled-components";

export const StyledPercursoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  min-height: 100vh;
  position: relative;

  h2 {
    font-size: 35px;
    letter-spacing: -1px;
    color: white;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 12px;
    letter-spacing: 1px;
    color: #ffffff;
    font-weight: lighter;
  }
`;

export const StyledBorder = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  border: 2px solid #0046c7;
  background-color: white;
  width: 120px;
  text-align: center;

  h3 {
    font-size: 12px;
    letter-spacing: 0px;
    color: #0046c7;
    font-weight: 700;
  }
`;

export const StyledPhone = styled.div`
  position: absolute;
  width: 100%;
  max-width: 900px;
  margin-top: 90px;
  /* z-index: 100; */

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const StyledBorder2 = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: 2px solid white;
  background-color: white;
  width: 300px;

  text-align: center;

  span {
    font-size: 20px;
    letter-spacing: 0px;
    color: #0046c7;
    font-weight: 700;
  }
`;

export const StyledRocket = styled.div`
  position: relative;
  padding: 10px;
  /* border-radius: 5px; */
  background: linear-gradient(#030012, #354077, #354077, #030012);
  border-radius: 5px;
  width: 90%;
  max-width: 362px;
  min-height: 780px;
  border-radius: 50px;
  margin-top: 20px;

  /* @media (min-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    gap: 10px;
    position: relative;
    padding: 10px;
    background: linear-gradient(#030012, #354077, #354077, #030012);
    border-radius: 5px;
  } */
`;

export const StyledDivRocket = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 10px;
  /* position: absolute; */
  top: 0px;
  left: 0px;

  /* @media (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 45%;
  } */
`;

export const StyledLottiePercurso = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  svg {
    display: block;
    height: 10px;
    width: 40px;
  }
`;

export const StyledAstronaut = styled.div`
  right: 1px;
  height: 800px;
  position: absolute;
  width: 800px;
`;
