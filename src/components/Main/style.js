import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const StyledDiv = styled.div`
    
    display: flex;
    justify-content: center;
    margin-top: 10px;

      img {
        width: 100%;
        max-width: 400px;    
        height: 200px;
        border-radius: 10px;
        border: 2px #CED1D5 solid;

        @media (max-width: 414px){
            border-radius: 10px;
            border: 2px #CED1D5 solid;
        }
    }    
`

export const StyledDivMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;

    @media (min-width: 375px){
            gap: 20px;
            margin-top: 25px;
        }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 300;
    } 

    h1 {
        font-family: 'Fredoka One', sans-serif;
        font-size: 25px;
        font-weight: 400;
        color: #0B1F3B
    }

    p {
        width: 100%;
        text-align: justify;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 200;
    }

    button {
        height: 48px;
        width: 100%;
        max-width: 500px;
        background-color: #2C7AED;
        border: none;
        border-radius: 8px;
        color: white;
        font-family: 'Fredoka One', sans-serif;
        font-weight: 200;
        font-size: 14px;
    }


`