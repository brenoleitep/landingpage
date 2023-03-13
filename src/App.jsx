import Depoimentos from "./components/Depoimentos";
import Introducao from "./components/Introducao";

import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Introducao />
      <Depoimentos />
    </>
  );
}

export default App;
