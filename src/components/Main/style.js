import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const StyledDiv = styled.div`
    
    display: flex;
    justify-content: center;
    margin-top: 30px;

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
    gap: 20px;
    margin-top: 30px;


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
        background-color: #4BC3CC;
        border: none;
        border-radius: 8px;
        color: white;
        font-family: 'Fredoka One', sans-serif;
        font-weight: 200;
        font-size: 14px;
    }

    img {
        width: 60px;
        margin-bottom: 40px;
        margin-top: 20px;

    }
`

export const StyledDivCourse = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    h2 {
        font-family: 'Fredoka One', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #0B1F3B
    }

    h3 {
        font-family: 'Fredoka One', sans-serif;
        font-size: 22px;
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

    img {
        width: 100%;
        max-width: 350px;
    }

`

export const StyledCourse = styled.div`
  
        display: flex;
        flex-direction: row;
        gap: 10px;

        svg {
            display: flex;
            align-items: center;
            background-color:#4BC3CC;
            padding: 10px;
            border-radius: 8px;
            width: 40%;
            font-size: 60px;
            color: white;
        }
`

export const StyledCourses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
                width: 100%;
                text-align: justify;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                font-weight: 200;
                word-wrap: break-word;
            }   

    img {
        width: 70px;
    }
`