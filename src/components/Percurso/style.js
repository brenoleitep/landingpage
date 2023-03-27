import styled from "styled-components";

export const StyledPercursoDiv = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 35px;
    letter-spacing: -1px;
    color: #0046c7;
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
    font-size: 16px;
    letter-spacing: 0px;
    color: #0046c7;
    font-weight: 700;
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
    font-size: 24px;
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
  /* box-shadow: 1px 1px 1px 1px white; */
`;

export const StyledDivRocket = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 12px;
  /* position: absolute; */
  top: 0px;
  left: 0px;
`;

// export const StyledRocket2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   align-items: center;
//   gap: 12px;
//   /* position: absolute; */
//   top: 0px;
//   left: 0px;

//   background: linear-gradient(#5d74ac, #5d74ac);

//   padding: 10px;
// `;

// export const StyledRocket3 = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   align-items: center;
//   gap: 12px;
//   /* position: absolute; */
//   top: 0px;
//   left: 0px;

//   background: linear-gradient(#5d74ac, #5d74ac);

//   padding: 10px;
// `;

// export const StyledRocket4 = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   align-items: center;
//   gap: 12px;
//   /* position: absolute; */
//   top: 0px;
//   left: 0px;

//   background: linear-gradient(#5d74ac, #c4b9d0);

//   padding: 10px;
// `;

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
