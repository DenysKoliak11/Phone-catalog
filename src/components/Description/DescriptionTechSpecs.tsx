import React from "react";
import { FlexContainer } from "../../styles/components/FlexContainer";
import { PrimaryTextSpan } from "../../styles/components/PrimaryTextSpan";
import { IPhoneType } from "../../types/AllType";
import { SelectedContainer } from "../../styles/components/SelectedContainer";
import TechSpecsContainer from "../../styles/components/TechSpecsContainer";

interface TechSpecsProps {
  phoneInfo: IPhoneType | null;
}
const DescriptionTechSpecs = ({ phoneInfo }: TechSpecsProps) => {
  return (
    <SelectedContainer maxWidth="520px" width="100%" flexDirection="column">
      <PrimaryTextSpan
        fontSize="22px"
        fontWeight={700}
        padding="0 0 16px 0"
        borderBottom="1px solid #E2E6E9"
        width="100%"
        marginBottom="26px"
      >
        Tech specs
      </PrimaryTextSpan>
      <TechSpecsContainer flexDirection="column">
        <TechSpecsContainer justifyContent="space-between">
          <PrimaryTextSpan fontSize="14px" lineHeight="21px" color="#89939A">
            Screen
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
            {phoneInfo?.screen}
          </PrimaryTextSpan>
        </TechSpecsContainer>
        <TechSpecsContainer justifyContent="space-between">
          <PrimaryTextSpan fontSize="14px" lineHeight="21px" color="#89939A">
            Resolution
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
            {phoneInfo?.resolution}
          </PrimaryTextSpan>
        </TechSpecsContainer>
        <TechSpecsContainer justifyContent="space-between">
          <PrimaryTextSpan fontSize="14px" lineHeight="21px" color="#89939A">
            Processor
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
            {phoneInfo?.processor}
          </PrimaryTextSpan>
        </TechSpecsContainer>
        <TechSpecsContainer justifyContent="space-between">
          <PrimaryTextSpan fontSize="14px" lineHeight="21px" color="#89939A">
            RAM
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
            {phoneInfo?.ram}
          </PrimaryTextSpan>
        </TechSpecsContainer>
        <TechSpecsContainer justifyContent="space-between">
          <PrimaryTextSpan fontSize="14px" lineHeight="21px" color="#89939A">
            Built in memory
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
            {phoneInfo?.capacity}
          </PrimaryTextSpan>
        </TechSpecsContainer>
        <TechSpecsContainer justifyContent="space-between">
          <PrimaryTextSpan fontSize="14px" lineHeight="21px" color="#89939A">
            Camera
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
            {phoneInfo?.camera}
          </PrimaryTextSpan>
        </TechSpecsContainer>
        <TechSpecsContainer justifyContent="space-between">
          <PrimaryTextSpan fontSize="14px" lineHeight="21px" color="#89939A">
            Zoom
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
            {phoneInfo?.zoom}
          </PrimaryTextSpan>
        </TechSpecsContainer>
        <TechSpecsContainer justifyContent="space-between">
          <PrimaryTextSpan fontSize="14px" lineHeight="21px" color="#89939A">
            Cell
          </PrimaryTextSpan>
          <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
            {phoneInfo?.cell.join(", ")}
          </PrimaryTextSpan>
        </TechSpecsContainer>
      </TechSpecsContainer>
    </SelectedContainer>
  );
};

export default DescriptionTechSpecs;
