import {
  StyledCompartimentos,
  StyledDiv,
  StyledLottieComp,
  TextBlue,
} from "./style";
import { FcAnswers } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcStatistics, FcTodoList } from "react-icons/fc";
import rocket from "../Lotties/spacerocket.json";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Compartimentos = () => {
  return (
    <StyledCompartimentos>
      <h2 data-aos="fade-up">
        CONHEÇA OS COMPARTIMENTOS DO <TextBlue>NOSSO FOGUETE</TextBlue>{" "}
      </h2>

      <StyledDiv data-aos="fade-up">
        <div>
          <FcAnswers />
          <h3> COPY INDUTIVA</h3>
        </div>

        <p>
          Aqui neste módulo você vai construir comigo a base do seu negócio. A
          maioria dos infoprodutos que vendem bastante porque não tem copy
          indutivo, ou seja, argumentos de vendas que vai colocar o seu produto
          numa prateleira acima da concorrência.
        </p>

        <p>
          Além de aprender o necessário para ter uma base sólida, você ainda
          terá aesso a todos os PDFs com a estrutura de copy e os meus
          documentos oficiais que usei para lançar esse produto, para você usar,
          ser mais assertivo e ganhar mais velocidade na construção das copies.
        </p>
      </StyledDiv>

      <StyledDiv data-aos="fade-up">
        <div>
          <FcCurrencyExchange />
          <h3>OFERTA SEDUTORA</h3>
        </div>

        <p>
          A sua copy vai deixar o seu produto atrativo e colocá-lo numa
          prateleira acima da concorrência, mas o que vai fazer o seu avatar dar
          o próximo passo será a sua oferta sedutora, impossível de ser
          ignorada, altamente desejável.
        </p>

        <p>
          Aqui você vai aprender a construir um movimento e instalar uma nova
          crença na cabeça do avatar que ele não vai ter alternativa a não ser
          aceitar a sua oferta.
        </p>
      </StyledDiv>

      <StyledDiv data-aos="fade-up">
        <div>
          <FcStatistics />
          <h3>TRÁFEGO RETILÍNEO</h3>
        </div>

        <p>
          Por que tráfego retilíneo? Porque você vai aprender um tráfego que não
          tem voltas, você não vai precisar dominar o gerenciador de anúncios,
          apesar de ter aulas completas sobre tráfego, o tráfego retilíneo vai
          te ensinar ABSOLUTAMENTE o que você precisa colocar com maestria sua
          estrutura para rodar, sem que você precise perder tempo estudando a
          fundo todas as funções do gerenciador de anúncio, a ideia aqui é te
          dar velocidade com mais assertividade.
        </p>

        <p>
          Aqui você vai aprender a construir um movimento e instalar uma nova
          crença na cabeça do avatar que ele não vai ter alternativa a não ser
          aceitar a sua oferta.
        </p>
      </StyledDiv>

      <StyledDiv data-aos="fade-up">
        <div>
          <FcTodoList />
          <h3>VENDA TODO DIA</h3>
        </div>

        <p>
          Com sua base toda estruturada, vamos colocar em prática a estratégia
          para você vender todos os dias. Você vai fazer junto comigo. seguindo
          exatamente o que eu for passando e em apenas 24 horas sua primeira
          estratégia vai estar no ar, sem dor de cabeça, sem dúvidas e eu
          estarei contigo ajudando no que for preciso.
        </p>
      </StyledDiv>

      <StyledLottieComp data-aos="fade-up">
        <Lottie animationData={rocket} />
      </StyledLottieComp>
    </StyledCompartimentos>
  );
};

export default Compartimentos;
