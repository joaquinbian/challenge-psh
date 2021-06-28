import React, { useContext } from "react";
import "./header.scss";
import img from "../../assets/pshLogo.svg";
import { AiOutlineClose } from "react-icons/ai";
import AppContext from "../../context/context";

const Header = () => {
  const { sidebar, setSidebar } = useContext(AppContext);
  return (
    <section className="chatsHeader">
      <section className="sectionHeader">
        <img src={img} alt="logo" />
        <p>React Chat</p>
        <AiOutlineClose
          className="closeSidebar"
          onClick={() => setSidebar(!sidebar)}
        />
      </section>
    </section>
  );
};

export default Header;
