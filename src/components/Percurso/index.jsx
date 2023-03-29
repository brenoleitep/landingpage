import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import {
  StyledBorder,
  StyledPercursoDiv,
  StyledBorder2,
  StyledRocket,
  StyledDivRocket,
  StyledLottiePercurso,
  StyledAstronaut,
  StyledPhone,
} from "./style";
import phone from "../Lotties/phone3.json";
import seta from "../Lotties/setaDown.json";
import setaDir from "../Lotties/rightseta.json";

const Percurso = () => {
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
      <StyledPercursoDiv>
        <h2 data-aos="fade-up">O SEU PERCURSO DENTRO DO PPL </h2>

        <StyledPhone>
          <Lottie animationData={phone} />
        </StyledPhone>
        <StyledRocket>
          <StyledDivRocket data-aos="fade-up">
            <StyledBorder>
              <h3> PASSO 1</h3>
            </StyledBorder>

            <StyledBorder2>
              <span> CRIAÇÃO DAS COPIES</span>
            </StyledBorder2>

            <p>
              CONSTRUÇÃO DOS ARGUMENTOS <br /> DE VENDAS
            </p>
          </StyledDivRocket>
          <StyledLottiePercurso>
            <Lottie animationData={seta} />
          </StyledLottiePercurso>

          <StyledDivRocket data-aos="fade-up">
            <StyledBorder>
              <h3> PASSO 2</h3>
            </StyledBorder>

            <StyledBorder2>
              <span> OFERTA SEDUTORA</span>
            </StyledBorder2>

            <p>
              CONSTRUINDO UM NOVO CONCEITO DE OFERTA <br /> NA CABEÇA DO SEU
              AVATAR E DIFERENCIANDO <br /> O SEU PRODUTO DO CONCORRENTE
            </p>
            <StyledLottiePercurso>
              <Lottie animationData={seta} />
            </StyledLottiePercurso>
          </StyledDivRocket>

          <StyledDivRocket data-aos="fade-up">
            <StyledBorder>
              <h3> PASSO 3</h3>
            </StyledBorder>

            <StyledBorder2>
              <span> MONTAR ESTRUTURA</span>
            </StyledBorder2>

            <p>
              COLOCANDO EM PRÁTICA O QUE VOCÊ APRENDEU <br /> CRIAÇÃO DE PÁGINA
              ESTRUTURADA PARA VENDA <br /> ESTRUTURA DE VÍDEO, CRIAÇÃO DOS
              CRIATIVOS <br /> CONFIGURAÇÕES DO PRODUTO E ESTRUTURA DE <br />{" "}
              REMAKERTING E RECUPERAÇÃO DE VENDAS
            </p>
            <StyledLottiePercurso>
              <Lottie animationData={seta} />
            </StyledLottiePercurso>
          </StyledDivRocket>

          <StyledDivRocket data-aos="fade-up">
            <StyledBorder>
              <h3> PASSO 4</h3>
            </StyledBorder>

            <StyledBorder2>
              <span> ATIVAR AS ESTRATÉGIAS</span>
            </StyledBorder2>

            <p>
              DEIXAR PRONTAS AS ESTRATÉGIAS <br /> E TER EXPLOSÃO DE VENDAS
              TODOS OS DIAS
            </p>
          </StyledDivRocket>
          {/* <StyledLottiePercurso>
            <Lottie animationData={progress} />
          </StyledLottiePercurso> */}
        </StyledRocket>
      </StyledPercursoDiv>
    </motion.div>
  );
};

export default Percurso;
