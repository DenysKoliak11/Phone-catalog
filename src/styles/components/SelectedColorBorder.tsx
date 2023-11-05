import styled from "@emotion/styled";

export interface SelectedColorBorderProps {
  //   theme?: any;
  //   justifyContent?:
  //     | "center"
  //     | "flex-start"
  //     | "flex-end"
  //     | "space-between"
  //     | "space-around"
  //     | "space-evenly";
  //   flexDirection?: "column" | "row";
  //   alignItems?: "center" | "flex-start" | "flex-end";
  //   flexWrap?: "wrap" | "nowrap";

  padding?: string;
  paddingRight?: string;
  margin?: string;
  backgroundColor?: string;
  background?: string;
  textColor?: string;
  position?: "relative" | "absolute" | "fixed" | "sticky" | "static";

  borderRadius?: string;
  border?: string;
  borderBottom?: string;

  display?: "flex" | "none" | "inline-block" | "block";
  cursor?: "pointer" | "default";
}

export const SelectedColorBorder = styled.div<SelectedColorBorderProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  background: ${(props) => props.background};
  color: ${(props) => props.textColor};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  display: ${(props) => props.display || "flex"};
  cursor: ${(props) => props.cursor};
  padding-right: ${(props) => props.paddingRight};
  background-size: cover;
  background-position: center;
`;
