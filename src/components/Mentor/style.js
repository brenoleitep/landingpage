import styled from "styled-components";

export const StyledMentor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  h2 {
    font-size: 55px;
    letter-spacing: -1px;
    color: #0046c7;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
  }

  p {
    font-size: 24px;
    letter-spacing: 1px;
    color: white;
    font-weight: lighter;
    text-align: justify;
  }

  img {
    width: 50%;
    /* max-width: 360px; */
  }
`;
