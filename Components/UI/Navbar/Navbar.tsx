import clsx from "clsx";
import React from "react";
import { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [toggled, openToggled] = useState(false);

  let attachedClasses1 = toggled
    ? [classes.toggles, classes.line1]
    : [classes.line1];
  let attachedClasses2 = toggled
    ? [classes.toggles, classes.line2]
    : [classes.line2];
  let attachedClasses3 = toggled
    ? [classes.toggles, classes.line3]
    : [classes.line3];

  return (
    <nav className={clsx(classes.Navbar, "mt-3")}>
      <div className={classes.Logo}>
        <img src="/assets/Main/LOGO.svg" alt="logo" />
      </div>

      <div className={classes.Nav_Content_Left}>
        <div className={classes.Search_Icon}>
          <img src="/assets/Icons/Search.svg" />
        </div>
        <div className={classes.burger}>
          <div className={attachedClasses1.join(" ")}></div>
          <div className={attachedClasses2.join(" ")}></div>
          <div className={attachedClasses3.join(" ")}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
