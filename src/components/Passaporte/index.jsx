import { StyledMain } from "../../styles/main";
import { StyledDivPass, StyledLottiePass } from "./style";
import { StyledPassaporteDiv } from "./style";
import astronaut from "../Lotties/astronaut.json";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Passaporte = () => {
  return (
    <StyledMain>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
          x: { duration: 0.2 },
          default: { ease: "easeIn" },
        }}
      >
        <StyledPassaporteDiv>
          <StyledDivPass>
            <h2 data-aos="fade-in">
              O PASSAPORTE QUE VAI FAZER VOCÊ VIVER DE UMA VEZ POR TODAS DO
              MERCADO DIGITAL
            </h2>

            <p data-aos="fade-in">
              Você acha que vender produto digital é complicado? Que sozinho não
              consegue dar conta porque são tantas coisas para fazer, tantas
              estratégias complexas que você fica paralizado? E que você não tem
              tantos recursos ou não confia em contratar uma equipe para te
              ajudar no lançamento e vive o dilema de querer viver do digital
              mas tem medo de arriscar tudo que você tem?
            </p>

            <p data-aos="fade-in">
              Não se preocupe que não é só você que vive esse terrível dilema,
              infelizmente as atuais estratégias de lançamento não foram
              pensadas para pessoas como você.
            </p>

            <p data-aos="fade-in">
              Se você pegar estratégias atuais e pagar em média de 5 a 7 mil,
              você vai perceber que é impossível você conseguir vender seu
              infoproduto sem ter uma equipe ou fazer parceria com um lançador.
            </p>

            <p data-aos="fade-in">
              Imagine pagar esse valor e quando entrar no curso ver que existem
              mais de 100 aulas e que você vai precisar de um gestor de tráfego,
              um copyright, um webdesigner e outras pessoas para conseguir
              colocar em prática?
            </p>
          </StyledDivPass>
          <StyledLottiePass>
            <Lottie animationData={astronaut} data-aos="fade-in" />
          </StyledLottiePass>
        </StyledPassaporteDiv>
      </motion.div>
    </StyledMain>
  );
};

export default Passaporte;
