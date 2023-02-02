import { useState } from "react";
import { StyledHeader } from "./style";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <StyledHeader>
        <h2>Brene</h2>

        <div>
          <h3>Menu</h3>
          <FaBars onClick={showSideBar} color="white" />
          {sideBar && <Sidebar active={setSideBar} />}
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
