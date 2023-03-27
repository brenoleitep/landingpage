import { motion } from "framer-motion";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import astronaut from "../Lotties/asteroid.json";
import planets from "../Lotties/planets.json";
import {
  StyledDiv,
  StyledDivTitles,
  StyledLogo,
  StyledLottie,
  StyledLotties,
  StyledYoutube,
  TypingText,
} from "./style";
import youtube from "../../assets/youtube.jpg";
import logo from "../../assets/logo.png";
import Texts from "../Texts";
import { StyledMain } from "../../styles/main";

const Introducao = () => {
  // const text = "Olá, seja bem-vindo ao PPL";
  const text2 = "Tenha acesso ao PROTOCOLO";
  // const typingText = Texts(text);
  const typingText2 = Texts(text2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.4,
        x: { duration: 0.2 },
        default: { ease: "easeIn" },
      }}
    >
      <StyledDiv>
        <StyledDivTitles>
          <StyledLogo>
            <img src={logo} alt="PPL" />
          </StyledLogo>

          {/* <StyledLotties>
              <Lottie animationData={astronaut} />
            </StyledLotties> */}

          <h2 data-aos="fade-up">
            Tenha acesso ao PROTOCOLO <br /> que vai fazer com que você <br />{" "}
            mesmo que não saiba nada do <br /> digital, venda todos os dias e{" "}
            <br /> tenha explosões de <br /> faturamento toda semana, <br /> sem
            precisar contratar equipe <br />
            nem trabalhar mais por isso.
          </h2>

          <StyledYoutube data-aos="fade-down">
            <img src={youtube} alt="Youtube" />
          </StyledYoutube>

          <h3>
            O PPL vai te ensinar apenas o que ele precisa para vender seu
            produto <br /> digital, sem enrolação, mesmo que você tenha outra
            ocupação, e <br /> realizar o seu sonho de viver apenas do digital e
            ter uma vida com mais liberdade.
          </h3>

          <button>EU QUERO TER ACESSO AO PPL</button>
        </StyledDivTitles>

        <StyledLottie>
          <Lottie animationData={planets} />
        </StyledLottie>
      </StyledDiv>
    </motion.div>
  );
};

export default Introducao;
