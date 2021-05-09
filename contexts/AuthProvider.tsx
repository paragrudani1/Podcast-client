import React, { useState, useContext } from "react";

export type LoginFormValues = {
  loginForm: {
    email: {
      type: string;
      placeHolder: string;
      value: string;
      required: boolean;
      icon: string;
    };
    password: {
      type: string;
      placeHolder: string;
      value: string;
      required: boolean;
      icon: string;
    };
  };
  setLoginForm: React.Dispatch<React.SetStateAction<{}>>;
};

export const Auth = React.createContext<LoginFormValues | null>(null);

export const useAuth = () => useContext(Auth);

const AuthProvider: React.FC = ({ children }) => {
  const [loginForm, setLoginForm] = useState({
    email: {
      type: "email",
      placeHolder: "E-mail address",
      value: "",
      required: true,
      icon: "/assets/Icons/mail.svg",
    },
    password: {
      type: "password",
      placeHolder: "Password",
      value: "",
      required: true,
      icon: "/assets/Icons/key.svg",
    },
  });

  return (
    <Auth.Provider value={{ loginForm, setLoginForm }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
