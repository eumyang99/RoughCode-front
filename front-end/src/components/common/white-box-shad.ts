import styled, { css } from "styled-components";

export const WhiteBoxShad = styled.div<{
  width?: string;
  height?: string;
  radius?: string;
  shadColor?: string;
}>`
  ${({ width, height, radius, shadColor }) => css`
    width: ${width || "100%"};
    height: ${height || "100%"};
    background-color: var(--white-color);
    border-radius: ${radius || "25px"};
    box-shadow: 0 0 1.5rem 0 var(--${shadColor || "shad"}-color);
  `}
`;
