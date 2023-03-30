import styled from "styled-components";

export const StyledDivFaturamento = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 34px;
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
    z-index: 10;
  }

  p {
    font-size: 24px;
    letter-spacing: 1px;
    color: #ffffff;
    font-weight: lighter;
    width: 100%;
    text-align: justify;
  }
`;

export const LottieDivFaturamento = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const LottieDivMoney = styled.div`
  margin: 0 auto;
  position: absolute;
  width: 50%;
  z-index: 0;
  opacity: 60%;
  left: 0px;

  @media (max-width: 1080px) {
    width: 100%;
    top: 0px;
  }
`;
export const LottieDivMoney2 = styled.div`
  margin: 0 auto;
  position: absolute;
  width: 50%;
  z-index: 0;
  opacity: 60%;
  right: 0px;
  @media (max-width: 1080px) {
    width: 100%;
    center: 0px;
  }
`;

export const TextGold = styled.span`
  color: gold;
`;
