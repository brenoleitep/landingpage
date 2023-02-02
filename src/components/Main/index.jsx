import mac from "../../assets/mac.jpeg";
import { motion } from "framer-motion";
import { StyledDiv, StyledDivMain, StyledMain } from "./style";

const Main = () => {
  return (
    <StyledMain>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
      </motion.div>
    </StyledMain>
  );
};

export default Main;
