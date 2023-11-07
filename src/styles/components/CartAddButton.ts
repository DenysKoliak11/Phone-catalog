import styled from "@emotion/styled";

type CartAddButtonProps = {
  width?: string;
  height?: string;
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;

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
  padding?: string;
  border?: string;
  borderColor?: string;
  textAlign?: "left" | "center" | "right";
  background?: string;
};
export const CartAddButton = styled.button<CartAddButtonProps>`
  cursor: pointer;
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "14px"};
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  text-align: ${(props) => props.textAlign};
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
