import { motion } from "framer-motion";
import Lottie from "lottie-react";
import astronaut from "../Lotties/space.json";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  StyledDiv,
  StyledDivTitles,
  StyledLottie,
  StyledYoutube,
  TypingText,
} from "./style";
import youtube from "../../assets/youtube.jpg";
import Texts from "../Texts";

const Introducao = () => {
  const text = "Olá, seja bem-vindo ao PPL";
  const text2 =
    "Aqui você vai ter acesso ao PROTOCOLO que vai fazer com que você venda todos os dias. Mesmo que você não saiba nada do digital, o PPL vai te ensinar o que é preciso para vender o seu produto digital!";
  const typingText = Texts(text);
  const typingText2 = Texts(text2);

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
            <TypingText>{typingText}</TypingText>
          </h1>
          <h2 data-aos="fade-up">
            <TypingText>{typingText2}</TypingText>
          </h2>
        </StyledDivTitles>

        <StyledYoutube data-aos="fade-down">
          <img src={youtube} alt="" />
        </StyledYoutube>

        <button data-aos="fade-up-right">EU QUERO TER ACESSO AO PPL</button>

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
