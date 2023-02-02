import { FaTimes } from "react-icons/fa";
import { Container, Content } from "./style";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />

      <Content></Content>
    </Container>
  );
};

export default Sidebar;
