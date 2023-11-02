import styled from "@emotion/styled";

export interface FlexContainerProps {
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
  height?: string;
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  padding?: string;
  paddingRight?: string;
  margin?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  background?: string;
  textColor?: string;
  position?: "relative" | "absolute" | "fixed" | "sticky" | "static";
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  zIndex?: string;
  overflow?: "hidden" | "visible" | "auto";
  borderRadius?: string;
  border?: string;
  borderBottom?: string;
  boxShadow?: string;
  marginRight?: string;
  marginBottom?: string;
  hasError?: boolean;
  flex?: string;
  visibilityProp?: "hidden" | "visible";
  display?: "flex" | "none" | "inline-block" | "block";
  cursor?: "pointer" | "default";
  gap?: string;
  transform?: string;
  backdropFilter?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  flex: ${(props) => props.flex};
  position: ${(props) => props.position};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin: ${(props) => props.margin};
  flex-wrap: ${(props) => props.flexWrap};
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.backgroundColor};
  background: ${(props) => props.background};
  color: ${(props) => props.textColor};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
  overflow: ${(props) => props.overflow};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  box-shadow: ${(props) => props.boxShadow};
  visibility: ${(props) => props.visibilityProp};
  display: ${(props) => props.display || "flex"};
  cursor: ${(props) => props.cursor};
  gap: ${(props) => props.gap};
  padding-right: ${(props) => props.paddingRight};
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  background-position: center;
  transform: ${(props) => props.transform};

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    backdrop-filter: ${(props) => props.backdropFilter};
  }
  img {
    max-height: 460px;
    max-width: 400px;
  }
`;
