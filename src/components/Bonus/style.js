import styled from "styled-components";

export const StyledDivBonus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  h2 {
    font-size: 35px;
    letter-spacing: -1px;
    color: white;
    font-weight: 700;
    text-align: center;
  }
  h3 {
    font-size: 28px;
    letter-spacing: -1px;
    color: #0046c7;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 14px;
    letter-spacing: 1px;
    color: #ffffff;
    font-weight: lighter;
    width: 100%;
    max-width: 600px;
    text-align: justify;
  }

  img {
    width: 240px;
    height: 240px;
  }

  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media (max-width: 1080px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      li {
        margin-top: 40px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 330px;
    gap: 24px;
  }

  span {
    font-size: 28px;
    letter-spacing: -1px;
    color: white;
    opacity: 70%;
    font-weight: 700;
    text-align: center;
    text-decoration: line-through;
  }

  h4 {
    font-size: 28px;
    letter-spacing: -1px;
    color: white;
    font-weight: 700;
    text-align: center;
  }
`;
