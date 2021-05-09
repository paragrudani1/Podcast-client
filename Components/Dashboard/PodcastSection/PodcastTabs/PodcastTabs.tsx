import React from "react";
import classes from "./PodcastTabs.module.css";
import {
  Tab,
  Tabs,
  TabTypeMap,
  withStyles,
  createStyles,
  TabsProps,
  TabsClassKey,
} from "@material-ui/core";
import clsx from "clsx";
import { useTab } from "../../../../contexts/TabProvider";

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Styles extends Partial<Record<TabsClassKey, string>> {
  focusVisible?: string;
}

interface Props extends TabsProps {
  classes: Styles;
}

const CustomTabs = withStyles({ indicator: { opacity: 0 } })(Tabs);

const CustomTab = withStyles({
  root: {
    color: "#898F97",
    textTransform: "unset",
    fontWeight: "normal",
    width: "fit-content",
    minWidth: 40,
    minHeight: "min-content",
    padding: "3px 2px",
    marginRight: 25,
  },
  selected: {
    color: "#3E8BFF",
  },
})(Tab);

const PodcastTabs: React.FC = () => {
  const {
    podcastSectionTabIndex,
    setPodcastSectionTabIndex,
    podcastSectionTabs,
  } = useTab();

  const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    console.log(value);

    setPodcastSectionTabIndex(value);
  };

  return (
    <div className={clsx(classes.Container, "mt-3")}>
      <CustomTabs value={podcastSectionTabIndex} onChange={handleChange}>
        {podcastSectionTabs.map(({ label, index }) => {
          return <CustomTab label={label} {...a11yProps(index)} />;
        })}
      </CustomTabs>
    </div>
  );
};

export default PodcastTabs;
