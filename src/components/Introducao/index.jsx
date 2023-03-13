import { motion } from "framer-motion";
import Lottie from "lottie-react";
import astronaut from "../Lotties/space.json";
import rocket from "../Lotties/cosmos.json";
import AOS from "aos";
import "aos/dist/aos.css";
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
          <h1 data-aos="fade-up">
            Olá, seja bem-vindo <br /> ao PPL
          </h1>

          <h2 data-aos="fade-up">
            Tenha acesso ao PROTOCOLO que vai fazer com que você venda todos os
            dias. Mesmo que você não saiba nada do digital, o PPL vai te ensinar
            o que é preciso para vender o seu produto digital!
          </h2>
        </StyledDivTitles>

        <StyledYoutube data-aos="fade-down">
          <img src={youtube} alt="" />
        </StyledYoutube>

        <button data-aos="fade-up-right">TENHA ACESSO AO PPL</button>

        <StyledLottie data-aos="fade-down">
          <Lottie animationData={astronaut} />
        </StyledLottie>
        {/* <StyledLotties>
          <Lottie animationData={rocket} />
        </StyledLotties> */}
      </StyledDiv>
    </motion.div>
  );
};

export default Introducao;
