import styled from "styled-components";

export const StyledHeader = styled.header`
    background: linear-gradient(to left, #4BC3CC, #2C7AED);
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;

    h2 {
        font-size: 32px;
        color: white;
        font-family: 'Fredoka One', sans-serif;
        font-weight: 200;
    }  

    div {
        display: flex;
        gap: 0.8rem;

        h3 {
        font-size: 24px;
        color: white;
        font-family: 'Fredoka One', sans-serif;
        font-weight: 200;
        }
    }

    > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
    
  }
    
`;