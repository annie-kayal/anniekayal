import { useTheme } from "styled-components";
import React, { ReactElement } from "react";
import { Box, Heading, Text, Link } from "theme-ui";
import { paths } from "../../../constants/paths";

export const IntroductionSummary = (): ReactElement => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderBottom: [
          "none",
          "none",
          "none",
          "none",
          `1px solid ${theme.colors.paleBlue}`,
        ],
        borderRight: [
          "none",
          "none",
          "none",
          "none",
          `1px solid ${theme.colors.paleBlue}`,
        ],
        gridColumn: [1, 1, 1, "1 / span 10"],
        gridRow: ["1 / span 3", "", "", "", 1],
        alignSelf: ["center"],
        height: "fit-content",
        p: [4, null, null, 60],
      }}
    >
      <Text
        sx={{
          fontSize: 4,
          color: "primary",
          letterSpacing: 1,
        }}
        as="p"
      >
        Hi! My name is
      </Text>

      <Heading
        sx={{
          fontSize: [9],
          color: "paleBlue",
          fontWeight: "bold",
          letterSpacing: theme.spacing[3],
          marginTop: theme.spacing[5],
          fontFamily: "body",
        }}
      >
        ANNIE KAYAL
      </Heading>

      <Text
        sx={{
          color: "brown",
          fontSize: theme.fontSizes[2],
          lineHeight: theme.lineHeights[6],
          marginTop: [2],
        }}
        as="p"
      >
        I'm a{" "}
        <Text
          sx={{
            fontSize: [3, null, null, 4],
            color: theme.colors.paleBlue,
          }}
        >
          front-end-focused
        </Text>{" "}
        software engineer specialising in creating consumer-led web
        applications. I am currently building exciting features to drive
        customer retention and tackling re-building the internal administrative
        portal at
        <Link
          sx={{
            fontSize: 4,
            color: "paleBlue",
            textDecoration: "none",
          }}
          href={paths.MINDFUL_CHEF}
        >
          {" "}
          Mindful Chef
        </Link>
        .
      </Text>

      <Text
        as="p"
        sx={{ fontSize: 3, fontFamily: "body", color: "brown", mt: 3 }}
      >
        Currently: Challenging myself to develop an application using Golang.
      </Text>
    </Box>
  );
};
