import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import astronaut from "../Lotties/yellow.json";
import rocket from "../Lotties/cosmos.json";
import {
  StyledDiv,
  StyledDivTitles,
  StyledLottie,
  StyledLotties,
  StyledYoutube,
} from "./style";
import youtube from "../../assets/youtube.jpg";

const Introducao = () => {
  return (
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
        <StyledDivTitles>
          <h1>
            Olá, seja bem-vindo <br /> ao PPL
          </h1>

          <h2>
            O protocolo que vai te fazer vender todos os dias. <br /> Mesmo que
            você não saiba nada do digital.
          </h2>
        </StyledDivTitles>
        <StyledLottie>
          <Lottie animationData={rocket} />
        </StyledLottie>

        <StyledYoutube>
          <img src={youtube} alt="" />
        </StyledYoutube>

        <button>TENHA ACESSO AO PPL</button>
      </StyledDiv>
    </motion.div>
  );
};

export default Introducao;
