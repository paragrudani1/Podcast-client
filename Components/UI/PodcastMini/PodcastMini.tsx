import React from "react";
import classes from "./PodcastMini.module.css";
import Image from "next/image";
import clsx from "clsx";
import { Card, IconButton } from "@material-ui/core";

interface Props {
  image: string;
  style: React.CSSProperties;
}

const PodcastMini: React.FC<Props> = ({ style, image }) => {
  return (
    <Card
      style={{ overflow: "unset", ...style }}
      className={clsx(classes.Container, "pb-2")}
    >
      <div className={classes.PodcastImg}>
        <Image
          objectFit="cover"
          width="100%"
          height="100%"
          src={image}
        />
      </div>
      {/* Card content goes here */}
      <div className={classes.Card_Content}>
        <div className={clsx(classes.Title, "mt-3")}>
          <h3>Miami isnt't the best place to live</h3>
        </div>
        <div className="mt-3 d-flex justify-content-between align-items-end w-100">
          <div className="w-50 d-flex flex-column justify-content-between">
            <div className={clsx(classes.Time, "d-flex mb-1")}>
              <img src="./assets/Icons/time.svg" /> <p>24:15:05</p>
            </div>
            <div className={clsx(classes.Author, "d-flex")}>
              <img src="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" />
              <h6>John Smith</h6>
            </div>
          </div>

          <IconButton style={{ padding: 0 }}>
            <Image width="30" height="30" src="/assets/Icons/play-small.svg" />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default PodcastMini;
