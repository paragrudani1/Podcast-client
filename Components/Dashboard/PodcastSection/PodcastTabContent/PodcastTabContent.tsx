import React from "react";
import PodcastMini from "../../../UI/PodcastMini/PodcastMini";
import TabPanel from "../../../UI/TabPanel/TabPanel";
import classes from "./PodcastTabContent.module.css";

const PodcastTabContent: React.FC = () => {
  return (
    <div className={classes.Container}>
      <PodcastMini />
    </div>
  );
};

export default PodcastTabContent;
