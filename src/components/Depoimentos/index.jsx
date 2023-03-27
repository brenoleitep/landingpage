import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Carrossel from "../Carrossel";
import { StyledDepoimentos } from "./style";
import { StyledMain } from "../../styles/main";

const Depoimentos = () => {
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
      <StyledDepoimentos>
        <h2 data-aos="fade-up">DEPOIMENTOS</h2>
        <Carrossel />
      </StyledDepoimentos>
    </motion.div>
  );
};

export default Depoimentos;
