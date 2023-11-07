import React from "react";

import styled from "@emotion/styled";
import ArrowLeft from "../../assets/img_icon/Arrow-Light.svg";

interface BackButtonProps {
  goBack: () => void;
}
const BackButtonWrapper = styled.button`
  padding: 6px 0;
  width: 66px;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: transparent;
  border: none;
`;
const BackButtonText = styled.span`
  color: #b4bdc3;
  font-size: 16px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  &:hover {
    color: #313237;
  }
`;
const BackButton = ({ goBack }: BackButtonProps) => {
  return (
    <BackButtonWrapper onClick={goBack}>
      <img src={ArrowLeft} alt="" />
      <BackButtonText>Back</BackButtonText>
    </BackButtonWrapper>
  );
};

export default BackButton;
