import { Theme } from "theme-ui";
import { spacing } from "./spacing";
import { DefaultTheme } from "styled-components";
import { typography } from "./typography";

export const theme: Theme & DefaultTheme = {
  bg: "#FFFBF5",
  fontSizes: typography,
  lineHeights: typography,
  fonts: {
    heading: "Old Standard TT",
    body: "Rubik",
  },
  spacing: spacing,
  colors: {
    primary: "#8a663f",
    brown: "#8a663f",
    black: "#000000",
    blue: "#3F638A",
    offwhite: "#FFFBF5",
    green: "#3F8A66",
    paleBlue: "#9DB7BE",
    grey: "#787887",
  },
  breakpoints: ["320px", "375px", "768px", "1024px", "1440px", "2560px"],
  images: {
    coverLeft: {
      height: 200,
      rotate: "10deg",
      pointerEvents: "none",
    },
    coverRight: {
      height: 200,
      rotate: "-10deg",
      mt: 50,
      ml: -20,
      pointerEvents: "none",
    },
  },
};
