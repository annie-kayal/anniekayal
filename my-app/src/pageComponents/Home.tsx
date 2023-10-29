import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { theme } from "../theme/theme";
import { Box } from "../components";

export const Layout: StyledComponent<"div", DefaultTheme> = styled(Box)`
  height: 100%;
  background: ${theme.colors.offwhite};
`;

export const SummaryContainer: StyledComponent<"div", DefaultTheme> = styled(
  Box
)`
  padding-top: ${theme.spacing[20]};
  padding-bottom: ${theme.spacing[12]};
  padding-left: ${theme.spacing[20]};
  flex-direction: row;
  justify-content: space-between;
  border-right: 1px solid ${theme.colors.paleBlue};
`;
