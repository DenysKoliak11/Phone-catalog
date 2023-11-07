import styled from "@emotion/styled";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Crumb from "./Crumb";
import Page from "../../constant/Page";
import IconHome from "../../assets/img_icon/home-icon.svg";
import IconRight from "../../assets/img_icon/Arrow-Right.svg";
export interface IBreadcrumbsLocationState {
  id: string;
  path: string;
  title: string;
  url: string;
}
const BreadcrumbsWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
  @media (max-width: 960px) {
    margin-bottom: 10px;
  }
`;
const BreadcrumbArrow = styled.span`
  width: 16px;
  height: 16px;
  opacity: 0.5;
`;
const CrumbLink = styled(Link)`
  color: #313237;
  font-size: 12px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;
const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <BreadcrumbsWrapper>
      <Link to={Page.Home}>
        <img src={IconHome} alt="" />
      </Link>
      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment}>
          <BreadcrumbArrow>
            <img src={IconRight} alt="" />
          </BreadcrumbArrow>
          <Crumb
            colorText={
              index === pathSegments.length - 1 ? "#B4BDC3" : "#313237"
            }
          >
            {index === pathSegments.length - 1 ? (
              segment
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            ) : (
              <CrumbLink to={`/${segment}`}>
                {segment
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </CrumbLink>
            )}
          </Crumb>
        </React.Fragment>
      ))}
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
