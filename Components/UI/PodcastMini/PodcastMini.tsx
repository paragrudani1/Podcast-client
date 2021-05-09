import React from "react";
import classes from "./PodcastMini.module.css";
import Image from "next/image";
import clsx from "clsx";

const PodcastMini: React.FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.PodcastImg}>
        <Image
          objectFit="cover"
          width="100%"
          height="100%"
          src="/assets/stock/image 3.png"
        />
      </div>
      {/* Card content goes here */}
      <div className={classes.Card_Content}>
        <div className={classes.Title}>
          <h1>Miami isnt't the best place to live</h1>
        </div>
        <div className="d-flex justify-content-between align-items-baseline">
          <div>
            <div className={clsx(classes.Time, "d-flex")}>
              <img src="./assets/Icons/time.svg" /> <p>24:15:05</p>
            </div>
            <div className={clsx(classes.Author, "d-flex")}>
              <img src="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
              <p>John Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastMini;
