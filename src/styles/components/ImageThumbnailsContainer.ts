import styled from "@emotion/styled";

export interface ImageThumbnailsContainerProps {
  theme?: any;
  flexDirection?: "column" | "row";
  alignItems?: "center" | "flex-start" | "flex-end";
  width?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  padding?: string;
  margin?: string;
  flexWrap?: "wrap" | "nowrap";
  borderRadius?: string;
  border?: string;
  borderBottom?: string;
  display?: "flex" | "none" | "inline-block" | "block";
  cursor?: "pointer" | "default";
  gap?: string;
  transform?: string;
}

export const ImageThumbnailsContainer = styled.div<ImageThumbnailsContainerProps>`
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  flex-wrap: ${(props) => props.flexWrap};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => props.flexDirection};
  display: ${(props) => props.display || "flex"};
  cursor: ${(props) => props.cursor};
  gap: ${(props) => props.gap};

  background-size: cover;
  background-position: center;
  transform: ${(props) => props.transform};
  @media (max-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
