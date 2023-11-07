import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "../../assets/img_icon/home-icon.svg";
interface ICrumbProps {
  colorText: string;
  children: ReactNode;
}
interface CrumbStyleProps {
  color?: string;
}
const Crumb = ({ children, colorText }: ICrumbProps) => {
  const CrumbItem = styled.span<CrumbStyleProps>`
    color: ${(props) => props.color};
    font-size: 12px;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
  `;

  return <CrumbItem color={colorText}>{children}</CrumbItem>;
};

export default Crumb;
