import styled from "@emotion/styled";

interface PrimaryTextType {
  theme?: any;
  color?: string;
  fontWeight?: "bold" | "normal" | number;
  fontStyle?: "italic" | "normal";
  fontSize?:
    | "8px"
    | "10px"
    | "12px"
    | "11px"
    | "14px"
    | "16px"
    | "18px"
    | "20px"
    | "22px"
    | "24px"
    | "28px"
    | "32px"
    | "36px"
    | "40px";
  lineHeight?: string;
  marginRight?: string;
  marginBottom?: string;
  padding?: string;
  textDecoration?: "underline" | "none";
  textTransform?: "capitalize" | "lowercase" | "uppercase" | "none";
  whiteSpace?: "nowrap" | "pre" | "normal";
  textAlign?: "left" | "center" | "right";
  textOverflow?: "ellipsis";
  overflow?: "hidden";
  width?: string;
  maxWidth?: string;
  borderBottom?: string;
  letterSpacing?: string;
  textDecorationLine?: string;
  wordBreak?:
    | "normal"
    | "break-all"
    | "keep-all"
    | "break-word"
    | "inherit"
    | "initial"
    | "unset";
}

export const PrimaryTextSpan = styled.span<PrimaryTextType>`
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "14px"};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lineHeight || "1.4"};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  text-decoration: ${(props) => props.textDecoration};
  text-transform: ${(props) => props.textTransform};
  white-space: ${(props) => props.whiteSpace};
  text-align: ${(props) => props.textAlign};
  text-overflow: ${(props) => props.textOverflow};
  overflow: ${(props) => props.overflow};
  max-width: ${(props) => props.maxWidth};
  border-bottom: ${(props) => props.borderBottom};
  letter-spacing: ${(props) => props.letterSpacing};
  word-break: ${(props) => props.wordBreak};
  text-decoration-line: ${(props) => props.textDecorationLine};

  a {
    color: ${(props) => props.color || props.theme.primary};
  }
`;
