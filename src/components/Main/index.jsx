import mac from "../../assets/mac.jpeg";
import { StyledDiv, StyledDivMain, StyledMain } from "./style";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <StyledMain>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { duration: 0.2 },
          default: { ease: "easeIn" },
        }}
      >
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
