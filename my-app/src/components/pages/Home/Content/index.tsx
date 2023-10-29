import React, { ReactElement } from "react";
import { Box } from "theme-ui";
import { About } from "./About";
import { Tab } from "../../../../pages/Home";
import { Contact } from "./Contact";
import { Experience } from "./Experience";

type ContentProps = {
  activeTab: Tab;
};

export const Content = ({ activeTab }: ContentProps): ReactElement => {
  return (
    <Box
      sx={{
        display: ["none", null, null, null, "block"],
        gridColumn: "1 / span 10",
        gridRow: "2 / span 4",
      }}
    >
      <Box
        sx={{
          p: 5,
        }}
      >
        {activeTab === "about-me" && <About />}

        {activeTab === "contact" && <Contact />}

        {activeTab === "experience" && <Experience />}
      </Box>
    </Box>
  );
};
