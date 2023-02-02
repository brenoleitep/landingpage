import Header from "./components/Header";
import Main from "./components/Main";
import { motion } from "framer-motion";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
      >
        <Header />
        <Main />
      </motion.div>
    </>
  );
}

export default App;
