import React from "react";
import classes from "./Dashboard.module.css";
import Navbar from "../../Components/UI/Navbar/Navbar";
import PodcastCard from "../../Components/UI/PodcastCard/PodcastCard";
import clsx from "clsx";
import PodcastSection from "../../Components/Dashboard/PodcastSection/PodcastSection";
import PodcastsAuthors from "../../Components/Dashboard/PodcastsAuthors/PodcastsAuthors";

const Index: React.FC = () => {
  return (
    <section className={classes.Dashboard}>
      <div className={clsx(classes.Dashboard_Head, "pb-5")}>
        <div className={classes.BG}></div>
        <div className="container">
          <div className="row">
            <div className="col-10 m-auto">
              <Navbar />
              <PodcastCard
                className="mt-5"
                badgeType="New"
                imageLink="https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                authorProfile="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                authorName="Harold Mccoy"
                title="About flow and our motivations"
                date="23.05.2019"
                time="24:15:05"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(classes.Dashboard_Content)}>
        <PodcastSection />
        <PodcastsAuthors />

      </div>
    </section>
  );
};

export default Index;
