import clsx from "clsx";
import React from "react";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <nav className={clsx(classes.Login_Nav, "pt-5")}>
      <img className="mt-" src="./assets/Main/LOGO.svg" alt="logo" />
    </nav>
  );
};

export default Header;
