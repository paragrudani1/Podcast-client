import clsx from "clsx";
import React from "react";
import classes from "./PodcastSection.module.css";
import PodcastTabs from "./PodcastTabs/PodcastTabs";
import PodcastTabContent from "./PodcastTabContent/PodcastTabContent";

const PodcastSection: React.FC = () => {
  return (
    <div className={clsx(classes.Container, "container")}>
      <div style={{ marginLeft: "8%" }}>
        <div className={classes.Section_Title}>
          <h1>Listen podcast</h1>
        </div>

        <PodcastTabs />
      </div>

      <PodcastTabContent />
    </div>
  );
};

export default PodcastSection;
