import React from "react";
import classes from "./LoginForm.module.css";
import { Input, IconButton, Button } from "@material-ui/core";
import clsx from "clsx";
import { LoginFormValues, useAuth } from "../../../contexts/AuthProvider";
import { UIButton } from "../../exports/components";

const LoginForm: React.FC = () => {
  const { loginForm, setLoginForm } = useAuth();

  type LoginFormData = {
    type: string;
    placeHolder: string;
    value: string;
    required: boolean;
    icon: string;
  };

  type FormElement = {
    id: string;
    config: LoginFormData;
  };

  const formElementsArray: FormElement[] = [];

  for (let key in loginForm) {
    formElementsArray.push({
      id: key,
      config: loginForm[key],
    });
  }

  return (
    <div className={clsx(classes.LoginForm, "mt-5")}>
      <form className="pt-2">
        {formElementsArray.map((formElement, i) => {
          return (
            <div className={clsx(classes.InputField, "mb-3")} key={i}>
              <IconButton classes={{ root: classes.FormInputIcon }}>
                <img src={formElement.config.icon} alt={formElement.id} />
              </IconButton>
              <Input
                value={formElement.config.value}
                type={formElement.config.type}
                placeholder={formElement.config.placeHolder}
                classes={{
                  input: classes.Input,
                  root: classes.InputRoot,
                }}
              />
            </div>
          );
        })}
        <UIButton
          style={{
            background: "#3369FF",
            boxShadow: "0px 5px 50px rgba(51, 105, 255, 0.7)",
          }}
          type="submit"
        >
          Login
        </UIButton>

        <div className={clsx(classes.Forgot_Password_Btn_Container, "mt-2")}>
          <Button classes={{ root: classes.Forgot_password_Btn }}>
            Forgot password?
          </Button>
        </div>
      </form>
      <div
        className={clsx(
          classes.Social_Login_Container,
          "mt-4 d-flex flex-wrap"
        )}
      >
        <UIButton
          type="button"
          style={{
            background: "#2B5D95",
            boxShadow: "0px 5px 50px rgba(43, 93, 149, 0.7)",
          }}
        >
          Login with Facebook
        </UIButton>
        <UIButton
          type="button"
          style={{
            background: "#FF334B",
            boxShadow: "0px 5px 50px rgba(255, 51, 75, 0.7)",
          }}
        >
          Register New Account
        </UIButton>
      </div>
    </div>
  );
};

export default LoginForm;
