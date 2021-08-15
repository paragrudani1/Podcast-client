import React, { useEffect, useRef } from "react";
import PodcastMini from "../../../UI/PodcastMini/PodcastMini";
import classes from "./PodcastTabContent.module.css";
import { useState } from "react";
import Head from "next/head";
import clsx from "clsx";
import { DragSlider } from "../../../UI/atoms/Drag-Slider";
import { Box } from "../../../UI/atoms/box";

const PodcastTabContent: React.FC = () => {
  const gliderRef = useRef(null);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>
      </Head>
      <div className={classes.Container}>
        <div
          ref={gliderRef}
          className={clsx(classes.Scroll_Container, "glider")}
        >
          <Box>
            <DragSlider slideApperance={null}>
              <PodcastMini image={"/assets/tabPic/dan-asaki-wC_YNVgIRdA-unsplash.jpg"} style={{ marginRight: "33px" }} />
              <PodcastMini image="/assets/tabPic/jezael-melgoza-43rUwqdoD1g-unsplash.jpg" style={{ marginRight: "33px" }} />
              <PodcastMini image="/assets/tabPic/martin-katler-1GKb9gRpf5s-unsplash.jpg" style={{ marginRight: "33px" }} />
              <PodcastMini image="/assets/tabPic/mary-ray-MuDXl7vHN5w-unsplash.jpg" style={{ marginRight: "33px" }} />
              <PodcastMini image="/assets/tabPic/paul-gilmore-rSLLnn0snVM-unsplash.jpg" style={{ marginRight: "33px" }} />
              <PodcastMini image="/assets/tabPic/sylvain-mauroux-jYCUBAIUsk8-unsplash.jpg" style={{ marginRight: "33px" }} />
            </DragSlider>
          </Box>
        </div>
      </div>
    </>
  );
};

export default PodcastTabContent;
