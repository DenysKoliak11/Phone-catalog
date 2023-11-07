import React from "react";
import { CapacitySelectorItem } from "../../styles/components/CapacitySelectorItem";
import { PrimaryTextSpan } from "../../styles/components/PrimaryTextSpan";
import { IPhoneType } from "../../types/AllType";
import { SelectedColorBorder } from "../../styles/components/SelectedColorBorder";
import { SelectedContainer } from "../../styles/components/SelectedContainer";
interface typeProps {
  phoneInfo: IPhoneType;
}
const SelectorCapacity = ({ phoneInfo }: typeProps) => {
  return (
    <SelectedContainer
      flexDirection="column"
      borderBottom="1px solid #E2E6E9"
      padding="0 0 30px"
      margin="14px 0 0"
      minWidth="320px"
    >
      <PrimaryTextSpan
        color="#89939A"
        fontWeight={600}
        fontSize="12px"
        marginBottom="12px"
      >
        Select capacity
      </PrimaryTextSpan>
      <SelectedContainer gap="10px">
        {phoneInfo?.capacityAvailable?.map((capacity: string) => (
          <SelectedColorBorder
            key={capacity}
            backgroundColor={
              capacity === phoneInfo.capacity ? "#313237" : "#fff"
            }
          >
            <CapacitySelectorItem
              to={`/phones/${
                phoneInfo.namespaceId
              }-${capacity.toLocaleLowerCase()}-${phoneInfo.color}`}
              color={capacity === phoneInfo.capacity ? "#fff" : "#313237"}
              padding="7px 8px"
            >
              {capacity}
            </CapacitySelectorItem>
          </SelectedColorBorder>
        ))}
      </SelectedContainer>
    </SelectedContainer>
  );
};

export default SelectorCapacity;
