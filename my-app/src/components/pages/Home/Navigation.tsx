import React, { ReactElement } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { theme } from "../../../theme/theme";
import { NavigationTab } from "../../Tab";
import { Tab } from "../../../pages/Home";

const AnimatedList = styled(motion.ul)`
  display: none;
  @media screen and (min-width: ${theme?.breakpoints?.[3]}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column: 11 / span 4;
    grid-row: 2 / span 3;
    border-left: 1px solid ${theme.colors.paleBlue};
    margin: 0;
    padding: 0;
  }
`;

type NavigationProps = {
  setActiveTab: (id: Tab) => void;
  activeTab: Tab | undefined | null;
};

export const Navigation = ({
  setActiveTab,
  activeTab,
}: NavigationProps): ReactElement => {
  return (
    <AnimatedList
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      transition={{ duration: 2 }}
    >
      <NavigationTab
        label="01. ABOUT"
        style={{ gridRow: "2", gridColumn: "1", alignSelf: "start" }}
        onClick={() => setActiveTab("about-me")}
        activeTab={activeTab}
        id="about-me"
      />

      <NavigationTab
        label="02. EXPERIENCE"
        style={{
          gridColumn: "1",
          gridRow: "2",
          alignSelf: "center",
          width: "fit-content",
        }}
        onClick={() => setActiveTab("experience")}
        activeTab={activeTab}
        id="experience"
      />

      <NavigationTab
        label="03. CONTACT"
        style={{
          gridColumn: "1",
          gridRow: "2",
          alignSelf: "end",
          width: "fit-content",
        }}
        onClick={() => setActiveTab("contact")}
        activeTab={activeTab}
        id="contact"
      />
    </AnimatedList>
  );
};
