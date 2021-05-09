import React from "react";
import classes from "./login.module.css";
import Header from "../../Components/Login/Header/Header";
import LoginForm from "../../Components/Login/LoginForm/LoginForm";
import Head from "next/head";
import clsx from "clsx";

const index: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="./CSS/bootstrap/grid.min.css" />
      </Head>

      <section className={classes.Login}>
        <div className="container">
          <div className="row">
            <div className="col-10 m-auto">
              <Header />

              <div className={clsx(classes.Title, "mt-5")}>
                <h1>Episodic series of digital audio.</h1>
              </div>

              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
