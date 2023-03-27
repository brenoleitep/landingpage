import Depoimentos from "./components/Depoimentos";
import Introducao from "./components/Introducao";
import { LogoFixed } from "./components/Introducao/style";
import Metodos from "./components/Metodos";
import Passaporte from "./components/Passaporte";
import Percurso from "./components/Percurso";
import logo from "./assets/logo.png";
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
        <Percurso />
        <LogoFixed>
          <img src={logo} alt="PPL" />
        </LogoFixed>
      </StyledMain>
    </>
  );
}

export default App;
