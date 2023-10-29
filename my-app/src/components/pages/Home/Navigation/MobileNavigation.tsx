import React, { ReactElement } from "react";
import styled from "styled-components";
import { Flex } from "theme-ui";
import { navigation } from "../../../../constants/navigation";

const NavigationItem = styled("li")<{ index: number }>`
  cursor: pointer;
  list-style-type: none;
  font-family: ${({ theme }) => theme.fonts.body};
  margin-left: ${({ index, theme }) => index !== 0 && `${theme.spacing[2]}px`};

  span {
    color: ${({ theme }) => theme.colors?.paleBlue};
  }
`;

type NavigationProps = {
  handleScroll: (index: number) => void;
};

export const MobileNavigation = ({
  handleScroll,
}: NavigationProps): ReactElement => {
  return (
    <Flex
      sx={{
        position: "sticky",
        top: 0,
        display: ["flex", null, null, null, "none"],
        p: 2,
        borderBottom: (theme) => `1px solid ${theme.colors?.paleBlue}`,
        background: "offwhite",
      }}
      as="ul"
    >
      {navigation.map((navItem, index) => (
        <NavigationItem index={index} onClick={() => handleScroll(index)}>
          {navItem}
        </NavigationItem>
      ))}
    </Flex>
  );
};
