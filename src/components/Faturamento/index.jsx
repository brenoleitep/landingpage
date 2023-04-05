import {
  LottieDivFaturamento,
  LottieDivMoney,
  LottieDivMoney2,
  StyledDivFaturamento,
  TextGold,
} from "./style";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import laptop from "../Lotties/laptopmoney.json";
import money from "../Lotties/moeda.json";

const Faturamento = () => {
  return (
    <StyledDivFaturamento>
      <h2 data-aos="fade-up">
        MAIS DE <TextGold> 1 MILHÃO E OITOCENTOS MIL REAIS </TextGold>FATURADOS
        EM 2022
      </h2>

      {/* <LottieDivMoney>
        <Lottie animationData={money} data-aos="fade-up" />
      </LottieDivMoney>

      <LottieDivMoney2>
        <Lottie animationData={money} data-aos="fade-up" />
      </LottieDivMoney2> */}
      <p data-aos="fade-up">
        Esse foi o faturamento que consegui em 2022 apenas em uma plataforma de
        vendas online, onde todo santo dia vendemos e toda semana uma explosão
        de vendas.
      </p>

      <p data-aos="fade-up">
        E você terá acesso a toda a estratégia, receberá todos os documentos
        para copiar e colar, vai poder baixar todo o meu plano, minhas copies, a
        estrutura das páginas e tudo que eu criei para montar esse treinamento.
      </p>

      <p data-aos="fade-up">
        Se você ainda não está convencido que essa é a MELHOR OPORTUNIDADE que
        você já viu para poder, através de um método simples e validado, poder
        viver sozinho apenas do digital e ter uma vida com mais liberdade.
      </p>
      <LottieDivFaturamento>
        <Lottie animationData={laptop} data-aos="fade-up" />
      </LottieDivFaturamento>
    </StyledDivFaturamento>
  );
};

export default Faturamento;
