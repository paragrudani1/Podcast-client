import { Button } from "@material-ui/core";
import React from "react";
import classes from "./UIButton.module.css";

interface Props {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  style: React.CSSProperties;
}

const UIButton: React.FC<Props> = ({ children, type, style }) => {
  return (
    <Button style={style} type={type} classes={{ root: classes.UIButton_Root }}>
      {children}
    </Button>
  );
};

export default UIButton;
