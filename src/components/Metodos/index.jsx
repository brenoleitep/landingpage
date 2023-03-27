import { StyledDivMetodos, StyledLottieMetodo } from "./style";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import astronaut from "../Lotties/laptop.json";

const Metodos = () => {
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
      <StyledDivMetodos>
        <h2 data-aos="fade-up">
          VOCÊ PRECISA FUGIR DOS MÉTODOS ATUAIS, ELES SÃO ARRISCADOS E PARA
          COLOCAR EM PRÁTICA VOCÊ VAI PENSAR CONTRATAR UMA EQUIPE.
        </h2>

        <p data-aos="fade-up">
          E foi pensando em você que eu criei o PPL: PROTOCOLO PRÁTICO DE
          LANÇAMENTO, que é para qualquer pessoa que já tentou fazer lançamento
          e não obteve resultados, que precisou contratar equipe, aumentar seu
          custo e o seu risco e mesmo assim não conseguiu viver do digital e
          para você que tem uma ocupação, quer viver do digital mas acredita não
          ter tempo para lançar seu produto.
        </p>

        <p data-aos="fade-up">
          O PPL será o seu passaporte para você viver do digital, ter mais
          liberdade financeira, geográfica e de tempo. Para poder aproveitar
          melhor a família e amigos, viajar, poder ter seus sonhos realizados e
          não precisar ter que ficar na frente do computador para ganhar
          dinheiro.
        </p>

        <StyledLottieMetodo>
          <Lottie animationData={astronaut} />
        </StyledLottieMetodo>
      </StyledDivMetodos>
    </motion.div>
  );
};

export default Metodos;
