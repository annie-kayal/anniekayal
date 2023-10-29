import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import styled from "styled-components";

import { theme } from "../../theme/theme";
import { Tab } from "../../pages/Home";

type NavigationTabProps = {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
  activeTab: Tab;
  id: string;
};

export const StyledTab = styled(motion.li)<{
  children: ReactElement;
  activeTab: Tab;
  id: string;
}>`
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  cursor: pointer;
  list-style-type: none;
  text-decoration: ${({ theme, activeTab, id }) =>
    activeTab === id && `${theme.colors.brown} underline`};
  text-decoration-thickness: ${({ theme }) => theme.spacing[1]};
  text-underline-offset: ${({ theme }) => theme.spacing[5]};
`;

export const NavigationTab = ({
  label,
  style,
  onClick,
  activeTab,
  id,
}: NavigationTabProps): ReactElement => {
  return (
    <StyledTab
      style={{ ...style }}
      initial={{
        width: 0,
        padding: theme.spacing[2],
      }}
      animate={{
        width: style?.width || "fit-content",
        display: "block",
        border: `1px solid ${theme.colors.paleBlue}`,
        textAlign: "center",
      }}
      transition={{ duration: 1, delay: 2 }}
      onClick={onClick}
      activeTab={activeTab}
      id={id}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 3.5 }}
        style={{
          margin: 0,
          fontFamily: theme.fonts.body,
          letterSpacing: theme.spacing[2],
        }}
      >
        {label}
      </motion.p>
    </StyledTab>
  );
};
