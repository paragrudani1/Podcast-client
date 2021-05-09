import clsx from "clsx";
import React from "react";
import classes from "./PodcastCard.module.css";
import { IconButton } from "@material-ui/core";

interface Props {
  badgeType: string | "new";
  title: string;
  date: string;
  time: string;
  imageLink: string;
  authorProfile: string;
  authorName: string;
  className?: string;
}

const PodcastCard: React.FC<Props> = ({
  badgeType,
  title,
  imageLink,
  authorName,
  authorProfile,
  date,
  time,
  className,
}) => {
  return (
    <div
      className={clsx(classes.Container, className)}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    linear-gradient(90deg, rgba(9, 18, 28, 0.8) 10.94%, rgba(9, 18, 28, 0) 100%),
    url(${imageLink})`,
        backgroundSize: "cover",
      }}
    >
      {/* Badge Name */}
      <div className={classes.Badge}>
        <p>{badgeType}</p>
      </div>

      {/* Podcast Title */}
      <div className={clsx(classes.Card, "col-10 m-auto")}>
        <div className={classes.Title}>
          <h1>{title}</h1>
        </div>

        {/* Time sections */}
        <div className="d-flex justify-content-between">
          <div className="col-md-6">
            <div
              className={clsx(
                classes.Podcast_Time,
                "d-flex justify-content-between mt-4"
              )}
            >
              {/* Date */}
              <div className={clsx(classes.Date, "d-flex")}>
                <p>{date}</p>
              </div>

              {/* Time */}
              <div className={clsx(classes.Time, "d-flex")}>
                <img src="./assets/Icons/time.svg" /> <p>{time}</p>
              </div>
            </div>

            <div
              className={clsx(
                classes.Author_Profile,
                "d-flex justify-content-start align-items-start mt-2"
              )}
            >
              <div className={classes.Image}>
                <img src={authorProfile} />
              </div>
              <div className={clsx(classes.Name)}>
                <h1>{authorName}</h1>
              </div>
            </div>
          </div>
          <div className={clsx(classes.Play_Btn, "d-flex")}>
            <IconButton>
              <img src="./assets/Icons/Play.svg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
