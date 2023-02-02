import Header from "./components/Header";
import Main from "./components/Main";
import { motion } from "framer-motion";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <motion.div initial={{ opacity: -1 }} animate={{ opacity: 1 }}>
        <Header />
        <Main />
      </motion.div>
    </>
  );
}

export default App;
