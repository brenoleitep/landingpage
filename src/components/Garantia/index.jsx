import React from "react";
import garantia from "../../assets/garantia.png";
import { StyledGarantia } from "./style";
import { TextBlue } from "../Compartimentos/style";
import { TextGold } from "../Faturamento/style";

const Garantia = () => {
  return (
    <StyledGarantia>
      <img src={garantia} alt="Garantia de 7 dias ou o seu dinheiro de volta" />

      <div>
        <h2>GARANTIA</h2>

        <p>
          A minha maior recompensa é receber no grupo de alunos os depoimentos e
          os prints que eles estão faturando de verdade, poder contribuir para o
          crescimento do outro sempre foi o que me motivou. O dinheiro é
          consequência de um bom trabalho que fazemos
        </p>

        <p>
          Então, você vai ter total segurança em decolar nosso foguete e se por
          acaso você perceber que ele não vai te ajudar, você vai ter{" "}
          <TextGold>7 dias de garantia</TextGold> após a aprovação do pagamento
          para desistir do curso, fazendo isso, em apenas 1 clique, eu vou
          devolver todo o seu dinheiro investido.
        </p>

        <p>
          O meu compromisso aqui é com o seu print de resultado, eu quero te
          ajudar a realizar o sonho de viver do digital e ter uma vida com mais
          liberdade.
        </p>

        <p>Eu garanto que não tem nenhum risco para você.</p>
      </div>
    </StyledGarantia>
  );
};

export default Garantia;
