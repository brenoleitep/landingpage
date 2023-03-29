import styled from "styled-components";
import background from "../../assets/planet.png";

export const StyledDepoimentos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 36px;
  margin-top: 40px;
  height: 50vh;

  h2 {
    font-size: 35px;
    color: white;
    font-weight: 700;
  }

  div {
    display: flex;
    width: 100%;
  }

  img {
    border-radius: 20px;
    width: 100%;
    padding: 10px;
  }
`;
