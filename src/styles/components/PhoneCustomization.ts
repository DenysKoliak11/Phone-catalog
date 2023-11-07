import styled from "@emotion/styled";

export interface PhoneCustomizationProps {
  theme?: any;
  margin?: string;
  width?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  display?: "flex" | "none" | "inline-block" | "block";
  cursor?: "pointer" | "default";
  gap?: string;
}

export const PhoneCustomization = styled.div<PhoneCustomizationProps>`
  width: ${(props) => props.width};

  min-width: ${(props) => props.minWidth};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  display: ${(props) => props.display || "flex"};
  margin: ${(prop) => prop.margin};
  cursor: ${(props) => props.cursor};
  gap: ${(props) => props.gap};
  background-size: cover;
  background-position: center;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
