import { FaTimes } from "react-icons/fa";
import { Container, Content } from "./style";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />

      <Content>
        <a href="youtube.com">Links aleatórios</a>
        <a href="youtube.com">Links aleatórios</a>
        <a href="youtube.com">Links aleatórios</a>
        <a href="youtube.com">Links aleatórios</a>
        <a href="youtube.com">Links aleatórios</a>
      </Content>
    </Container>
  );
};

export default Sidebar;
