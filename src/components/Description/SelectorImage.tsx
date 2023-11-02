import React, { useState } from "react";
import { FlexContainer } from "../../styles/components/FlexContainer";
import { IPhoneType } from "../../types/PhoneType";
import { ImageSelector } from "../../styles/components/ImageSelectorItem";
interface typeProps {
  phoneInfo: IPhoneType;
}
const SelectorImage = ({ phoneInfo }: typeProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const onChangeImage = (index: number) => {
    setImageIndex(index);
  };

  return (
    <FlexContainer maxWidth="560px" gap="16px">
      <FlexContainer flexDirection="column" gap="17px">
        {phoneInfo.images.map((imgUrl, index) => (
          <ImageSelector
            key={imgUrl}
            border="1px solid #E2E6E9"
            borderColor={imageIndex === index ? "#313237" : "#E2E6E9"}
            padding="7px 14px"
            maxWidth="80px"
            onClick={() => onChangeImage(index)}
          >
            <img src={`/_new/${imgUrl}`} alt="/" />
          </ImageSelector>
        ))}
      </FlexContainer>
      <FlexContainer maxHeight="468px" padding="7px 80px" minWidth="460px">
        <img src={`/_new/${phoneInfo.images[imageIndex]}`} alt="" />
      </FlexContainer>
    </FlexContainer>
  );
};

export default SelectorImage;
