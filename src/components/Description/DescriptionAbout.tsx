import React from "react";
import { FlexContainer } from "../../styles/components/FlexContainer";
import { PrimaryTextSpan } from "../../styles/components/PrimaryTextSpan";
interface DescriptionPropsType {
  descriptionInfo: { title: string; text: string[] }[];
}
const DescriptionAbout = ({ descriptionInfo }: DescriptionPropsType) => {
  return (
    <FlexContainer maxWidth="560px" width="100%" flexDirection="column">
      <PrimaryTextSpan
        fontSize="22px"
        fontWeight={700}
        padding="0 0 16px 0"
        borderBottom="1px solid #E2E6E9"
        width="100%"
        marginBottom="32px"
      >
        About
      </PrimaryTextSpan>
      {descriptionInfo.map((obj, index) => (
        <FlexContainer key={index} flexDirection="column" marginBottom="32px">
          <PrimaryTextSpan fontWeight={600} marginBottom="16px" fontSize="20px">
            {obj.title}
          </PrimaryTextSpan>
          {obj.text.map((text) => (
            <PrimaryTextSpan key={text} marginBottom="20px" color="#89939A">
              {text}
            </PrimaryTextSpan>
          ))}
        </FlexContainer>
      ))}
    </FlexContainer>
  );
};

export default DescriptionAbout;
