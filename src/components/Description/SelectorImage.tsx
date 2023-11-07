import React, { useState } from "react";
import { IPhoneType } from "../../types/AllType";
import { ImageSelector } from "../../styles/components/ImageSelectorItem";
import { SelectedContainer } from "../../styles/components/SelectedContainer";
import { SelectedImgContainer } from "../../styles/components/SelectedImgContainer";
import { ImageThumbnailsContainer } from "../../styles/components/ImageThumbnailsContainer";
interface typeProps {
  phoneInfo: IPhoneType;
}
const SelectorImage = ({ phoneInfo }: typeProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const onChangeImage = (index: number) => {
    setImageIndex(index);
  };

  return (
    <SelectedImgContainer maxWidth="560px" gap="16px">
      <ImageThumbnailsContainer flexDirection="column" gap="17px">
        {phoneInfo.images?.map((imgUrl, index) => (
          <ImageSelector
            key={imgUrl}
            border="1px solid #E2E6E9"
            borderColor={imageIndex === index ? "#313237" : "#E2E6E9"}
            padding="7px 14px"
            width="80px"
            onClick={() => onChangeImage(index)}
          >
            <img src={`/_new/${imgUrl}`} alt="/" />
          </ImageSelector>
        ))}
      </ImageThumbnailsContainer>
      <SelectedContainer maxHeight="468px" minWidth="460px" width="100%">
        <img src={`/_new/${phoneInfo.images[imageIndex]}`} alt="" />
      </SelectedContainer>
    </SelectedImgContainer>
  );
};

export default SelectorImage;
