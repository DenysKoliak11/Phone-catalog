import styled from "@emotion/styled";
import { Link } from "react-router-dom";
interface CapacitySelectorItemProps {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  maxWidth?: string;
  border?: string;
  marginTop?: string;
}

export const CapacitySelectorItem = styled(Link)<CapacitySelectorItemProps>`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  max-width: ${(props) => props.maxWidth};
  border: ${(props) => props.border};
  margin-top: ${(props) => props.marginTop};
`;
