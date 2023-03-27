import styled from "styled-components";
import background from "../../assets/planet.png";

export const StyledDepoimentos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 36px;
  margin-top: 40px;
  color: #0046c7;

  div {
    display: flex;
    width: 100%;
    min-height: 100vh;
  }

  img {
    border-radius: 20px;
    width: 100%;
    padding: 10px;
  }
`;
