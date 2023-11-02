import styled from "@emotion/styled";

type ImageSelectorProps = {
  width?: string;
  height?: string;
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  padding?: string;
  border?: string;
  borderColor?: string;
};
export const ImageSelector = styled.div<ImageSelectorProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-color: ${(props) => props.borderColor};
  img {
    display: block;
    width: 44px;
    height: 66px;
  }
`;
