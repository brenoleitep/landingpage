import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Carrossel from "../Carrossel";
import { StyledDepoimentos } from "./style";

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
        <h1 data-aos="fade-up">Depoimentos</h1>
        <Carrossel />
      </StyledDepoimentos>
    </motion.div>
  );
};

export default Depoimentos;
