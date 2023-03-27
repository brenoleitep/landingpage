import Depoimentos from "./components/Depoimentos";
import Introducao from "./components/Introducao";
import Metodos from "./components/Metodos";
import Passaporte from "./components/Passaporte";

import { GlobalStyle } from "./styles/globalStyles";
import { StyledMain } from "./styles/main";

function App() {
  return (
    <>
      <StyledMain>
        <GlobalStyle />
        <Introducao />
        <Depoimentos />
        <Passaporte />
        <Metodos />
      </StyledMain>
    </>
  );
}

export default App;
