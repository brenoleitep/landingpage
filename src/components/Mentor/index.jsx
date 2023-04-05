import React from "react";
import sius from "../../assets/sius.jpg";
import { StyledMentor } from "./style";

const Mentor = () => {
  return (
    <StyledMentor>
      <div>
        <h2>QUEM SERÁ O SEU MENTOR NESSA VIAGEM</h2>

        <p>
          Quem eu sou? Antigamente eu mandaria você se aproximar e perguntar,
          mas resumindo: Eu saí de um emprego de gerente de marketing, onde eu
          tinha estabilidade financeira, prestígio e fui me aventurar como
          empreendedor digital.
        </p>

        <p>
          O meu começo foi igual ao da maioria dos empreendedores, muita luta e
          pouco retorno, muito suor e pouco resultado.
        </p>

        <p>
          Sabe aquela música de Renato Russo que diz "Quem acredita sempre
          alcança?" Foi exatamente isso que aconteceu comigo. Eu nunca me
          contentei com 6 em 7 da vida, eu sabia que esse mercado poderia me dar
          muito mais, não desisti e hoje com mais de 3 milhões faturados eu
          decidi que seria a hora de ajudar pessoas que estão exatamente onde eu
          estava há alguns anos atrás, querendo viver do mercado digital e ter
          uma vida com muito mais liberdade.
        </p>

        <p>
          E para poder com integridade levar o conhecimento certo para as
          pessoas, eu investi pesado em conhecimento, mentorias, master minds e
          hoje, após ter ajudado mais de 3 mil alunos, quero poder te convidar
          para embarcar numa jornada que vai mudar a sua vida e possibilitar que
          você possa viver com digital e ter uma vida com mais liberdade.
        </p>
      </div>
      <img src={sius} alt="Sandro Sanper" />
    </StyledMentor>
  );
};

export default Mentor;
