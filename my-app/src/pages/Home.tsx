import React, { ReactElement, useRef, useState } from "react";

import { Grid } from "theme-ui";
import { Layout } from "../pageComponents";
import { IntroductionSummary } from "../components/pages/Home/IntroductionSummary";
import { Contact } from "../components/pages/Home/Content/Contact";
import { Navigation } from "../components/pages/Home/Navigation";
import { Content } from "../components/pages/Home/Content";
import { Experience } from "../components/pages/Home/Content/Experience";
import { About } from "../components/pages/Home/Content/About";
import { MobileNavigation } from "../components/pages/Home/Navigation/MobileNavigation";

export type Tab = "about-me" | "experience" | "contact" | undefined | null;

export function Home(): ReactElement {
  const [activeTab, setActiveTab] = useState<Tab | null>();
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (index: number) => {
    if (index === 0 && aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    } else if (index === 1 && experienceRef.current) {
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    } else if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    }
  };

  return (
    <>
      <MobileNavigation handleScroll={handleScroll} />
      <Layout>
        <Grid
          sx={{
            gridTemplateColumns: ["1fr", null, null, null, "repeat(14, 1fr)"],
            gridGap: 0,
            gridTemplateRows: "repeat(4, 1fr)",
            height: "100%",
            overflow: "scroll",
            maxHeight: ["100vh"],
          }}
        >
          <IntroductionSummary />

          <Navigation setActiveTab={setActiveTab} activeTab={activeTab} />

          <Content activeTab={activeTab} />
        </Grid>

        <About
          sx={{ display: [null, null, null, null, "none"] }}
          ref={aboutRef}
        />

        <Experience
          sx={{ display: [null, null, null, null, "none"] }}
          ref={experienceRef}
        />

        <Contact
          sx={{ display: [null, null, null, null, "none"] }}
          ref={contactRef}
        />
      </Layout>
    </>
  );
}
