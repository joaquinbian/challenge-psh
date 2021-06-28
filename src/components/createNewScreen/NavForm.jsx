import React from "react";
import "./navform.scss";
import img from "../../assets/pshLogo.svg";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";
const NavForm = () => {
  const history = useHistory();

  return (
    <nav className="nav">
      <BiArrowBack className="backIcon" onClick={() => history.goBack()} />
      <div className="navContainer">
        <img src={img} />
        <p>React form</p>
      </div>
    </nav>
  );
};

export default NavForm;
