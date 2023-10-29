import "styled-components";
import { Spacing } from "./spacing";

declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    fontSizes: string[];
    lineHeights: string[];
    fonts: {
      heading: string;
      body: string;
    };
    colors: {
      brown: string;
      black: string;
      blue: string;
      offwhite: string;
      green: string;
      paleBlue: string;
      grey: string;
    };
    breakpoints?: string[];
    spacing: Spacing;
  }
}
