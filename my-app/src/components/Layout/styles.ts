import styled from "styled-components";

export const Box = styled.div`
  ${({ style }) => ({ ...style })}
`;

export const Flex = styled(Box)`
  display: flex;
`;

export const Grid = styled(Box)`
  display: grid;
`;
