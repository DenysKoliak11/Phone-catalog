import React from "react";
import { IPhoneType } from "../../types/PhoneType";
import { ModelColorEnum, ColorsInfo } from "../../constant/ModelColors";
import { ColorSelectorItem } from "../../styles/components/ColorSelectorItem";
import { FlexContainer } from "../../styles/components/FlexContainer";
import { PrimaryTextSpan } from "../../styles/components/PrimaryTextSpan";
interface typeProps {
  phoneInfo: IPhoneType;
}
const SelectorColor = ({ phoneInfo }: typeProps) => {
  return (
    <FlexContainer
      flexDirection="column"
      borderBottom="1px solid #E2E6E9"
      padding="0 0 30px"
    >
      <PrimaryTextSpan
        color="#89939A"
        fontWeight={600}
        fontSize="12px"
        marginBottom="12px"
      >
        Available colors
      </PrimaryTextSpan>
      <FlexContainer gap="12px">
        {phoneInfo?.colorsAvailable?.map((color: ModelColorEnum) => (
          <FlexContainer
            padding="4px"
            key={color}
            borderRadius="50%"
            border={`1px solid ${
              color === phoneInfo.color ? "#313237" : "#E2E6E9"
            }`}
          >
            <ColorSelectorItem
              key={color}
              to={`/phone/${
                phoneInfo.namespaceId
              }-${phoneInfo.capacity.toLocaleLowerCase()}-${color}`}
              backgroundColor={`${ColorsInfo[color]?.color}`}
            />
          </FlexContainer>
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default SelectorColor;
