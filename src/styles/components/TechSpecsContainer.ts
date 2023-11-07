import styled from "@emotion/styled";
export interface TechSpecsContainerProps {
  theme?: any;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexDirection?: "column" | "row";
  alignItems?: "center" | "flex-start" | "flex-end";
  flexWrap?: "wrap" | "nowrap";
  width?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  padding?: string;
  paddingRight?: string;
  margin?: string;
  backgroundColor?: string;
  display?: "flex" | "none" | "inline-block" | "block";
  cursor?: "pointer" | "default";
  gap?: string;
  transform?: string;
}
const TechSpecsContainer = styled.div<TechSpecsContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
`;
export default TechSpecsContainer;
