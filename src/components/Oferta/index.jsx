import {
  LottieDivOferta,
  StyledDivisor,
  StyledDivOferta,
  StyledDivPrice,
  StyledTextOferta,
} from "./style";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import sale from "../Lotties/50off.json";

const Oferta = () => {
  return (
    <StyledDivOferta>
      <StyledDivisor>
        <h2>
          OFERTA EXCLUSIVA POR <br />{" "}
          <StyledTextOferta>TEMPO LIMITADO</StyledTextOferta>
        </h2>

        <p>
          Se você se inscrever agora, vai ganhar um desconto de 50%, ter acesso
          a todos os bônus, fazer parte da comunidade exclusiva do PPL e ter o
          seu passaporte carimbado para viver apenas do digital.
        </p>

        <ul>
          <li>- Desconto de 50% com tempo limitado</li>
          <li>- 7 dias para testar o produto</li>
          <li>- 4 bônus no valor de R$ 991,00</li>
          <li>- Acesso a comunidade exclusiva PPL</li>
        </ul>

        <h3>DE R$ 997,00</h3>
        <h4>POR APENAS</h4>
        <StyledDivPrice>
          <span>12x</span>
          <h6>49,79*</h6>
        </StyledDivPrice>
        <p>ou 497,00 à vista</p>

        <button>EU QUERO VIVER DO DIGITAL</button>
      </StyledDivisor>

      <LottieDivOferta>
        <Lottie animationData={sale} />
      </LottieDivOferta>
    </StyledDivOferta>
  );
};

export default Oferta;
