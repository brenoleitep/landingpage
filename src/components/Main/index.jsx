import mac from "../../assets/mac.jpeg";
import { StyledDiv, StyledDivMain, StyledMain } from "./style";

const Main = () => {
  return (
    <StyledMain>
      <StyledDiv>
        <img src={mac} alt="Macbook" />
      </StyledDiv>

      <StyledDivMain>
        <h2>Bem vindo ao Shape.</h2>

        <h1>
          Transformando ações <br /> em oportunidades
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          consequuntur necessitatibus dicta? Quibusdam quidem quae, beatae
          perferendis repellat quas cum, temporibus maiores vel excepturi,
          perspiciatis earum dicta esse officia voluptates?
        </p>

        <button>Saiba mais</button>
      </StyledDivMain>
    </StyledMain>
  );
};

export default Main;
