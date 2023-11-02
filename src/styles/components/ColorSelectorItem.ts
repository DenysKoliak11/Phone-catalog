import styled from "@emotion/styled";
import { Link } from "react-router-dom";
interface ColorSelectorItemProps {
  color?: string;
  backgroundColor?: string;
  maxWidth?: string;
}

export const ColorSelectorItem = styled(Link)<ColorSelectorItemProps>`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.backgroundColor};
  max-width: ${(props) => props.maxWidth};
`;
