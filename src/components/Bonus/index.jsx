import { StyledDivBonus } from "./style";
import destrave from "../../assets/destrave.png";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Bonus = () => {
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
      <StyledDivBonus>
        <h2 data-aos="fade-up">
          VOCÊ AINDA VAI LEVAR TRÊS SUPER BÔNUS QUE VÃO TE AJUDAR A ACELERAR
          AINDA MAIS O SEU FOGUETE!
        </h2>

        <ul>
          <li>
            <div data-aos="fade-up">
              <img src={destrave} alt="Curso destrave em 17 dias" />

              <h3>Destrave em 17 dias</h3>
              <p>
                Um treinamento que vai fazer com que você perca definitivamente
                o medo de gravar vídeo em até 17 dias.
              </p>

              <p>
                Esse método tem destravado 100% dos meus alunos que colocaram em
                prática. E melhor, você vai começar a gravar como se já fizesse
                isso há muitos anos, tendo mais confiança e desenvoltura nos
                seus vídeos.
              </p>

              <span>De R$ 297,00</span>

              <h4>POR ZERO</h4>
            </div>
          </li>

          <li>
            <div data-aos="fade-up">
              <img src={destrave} alt="Curso destrave em 17 dias" />

              <h3>Destrave em 17 dias</h3>
              <p>
                Um treinamento que vai fazer com que você perca definitivamente
                o medo de gravar vídeo em até 17 dias.
              </p>

              <p>
                Esse método tem destravado 100% dos meus alunos que colocaram em
                prática. E melhor, você vai começar a gravar como se já fizesse
                isso há muitos anos, tendo mais confiança e desenvoltura nos
                seus vídeos.
              </p>

              <span>De R$ 297,00</span>

              <h4>POR ZERO</h4>
            </div>
          </li>
          <li>
            <div data-aos="fade-up">
              <img src={destrave} alt="Curso destrave em 17 dias" />

              <h3>Destrave em 17 dias</h3>
              <p>
                Um treinamento que vai fazer com que você perca definitivamente
                o medo de gravar vídeo em até 17 dias.
              </p>

              <p>
                Esse método tem destravado 100% dos meus alunos que colocaram em
                prática. E melhor, você vai começar a gravar como se já fizesse
                isso há muitos anos, tendo mais confiança e desenvoltura nos
                seus vídeos.
              </p>

              <span>De R$ 297,00</span>

              <h4>POR ZERO</h4>
            </div>
          </li>
        </ul>
      </StyledDivBonus>
    </motion.div>
  );
};

export default Bonus;
