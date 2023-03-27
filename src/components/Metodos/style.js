import styled from "styled-components";

export const StyledDivMetodos = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 32px;
  min-height: 100vh;
  position: relative;

  h2 {
    font-size: 35px;
    letter-spacing: -1px;
    color: #0046c7;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 24px;
    letter-spacing: 1px;
    color: #ffffff;
    font-weight: lighter;
    width: 100%;
    max-width: 600px;
    text-align: justify;
  }
`;
