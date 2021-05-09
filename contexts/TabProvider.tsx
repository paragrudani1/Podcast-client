import React from "react";
import { useState } from "react";
import { useContext } from "react";

export type TabProps = {
  podcastSectionTabIndex: number;
  setPodcastSectionTabIndex: React.Dispatch<React.SetStateAction<number>>;
  podcastSectionTabs: {
    label: string;
    index: number;
  }[];
  setPodcastSectionTabs: React.Dispatch<
    React.SetStateAction<
      {
        label: string;
        index: number;
      }[]
    >
  >;
};

export const Tab = React.createContext<TabProps | null>(null);

export const useTab = () => {
  return useContext(Tab);
};

const TabProvider: React.FC = ({ children }) => {
  const [podcastSectionTabs, setPodcastSectionTabs] = useState([
    { label: "Recent", index: 0 },
    { label: "Topics", index: 1 },
    { label: "Authors", index: 2 },
    { label: "Episodes", index: 3 },
  ]);

  const [podcastSectionTabIndex, setPodcastSectionTabIndex] = useState<number>(
    0
  );

  return (
    <Tab.Provider
      value={{
        podcastSectionTabIndex,
        setPodcastSectionTabIndex,
        podcastSectionTabs,
        setPodcastSectionTabs,
      }}
    >
      {children}
    </Tab.Provider>
  );
};

export default TabProvider;
