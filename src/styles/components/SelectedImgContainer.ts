import styled from "@emotion/styled";

export interface SelectedImgContainerProps {
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
  background?: string;
  borderRadius?: string;
  border?: string;
  borderBottom?: string;
  marginRight?: string;
  marginBottom?: string;
  flex?: string;
  display?: "flex" | "none" | "inline-block" | "block";
  cursor?: "pointer" | "default";
  gap?: string;
  transform?: string;
}

export const SelectedImgContainer = styled.div<SelectedImgContainerProps>`
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};

  min-width: ${(props) => props.minWidth};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.backgroundColor};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  display: ${(props) => props.display || "flex"};
  cursor: ${(props) => props.cursor};
  gap: ${(props) => props.gap};
  padding-right: ${(props) => props.paddingRight};
  background-size: cover;
  background-position: center;
  transform: ${(props) => props.transform};
  @media (max-width: 960px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
