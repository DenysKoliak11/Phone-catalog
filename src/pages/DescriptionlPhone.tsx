import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../network/API";
import { FlexContainer } from "../styles/components/FlexContainer";
import { IPhoneType } from "../types/AllType";
import { PrimaryTextSpan } from "../styles/components/PrimaryTextSpan";
import SelectorCapacity from "../components/Description/SelectorCapacity";
import SelectorColor from "../components/Description/SelectorColor";
import SelectorImage from "../components/Description/SelectorImage";
import DescriptionAbout from "../components/Description/DescriptionAbout";
import DescriptionTechSpecs from "../components/Description/DescriptionTechSpecs";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slice/filterSlice";
import ArrowLeft from "../assets/img_icon/Arrow-Light.svg";

const DescriptionPhone = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { name } = useParams<{ name: string }>();
  const [phoneInfo, setPhoneInfo] = useState<IPhoneType | null>(null);

  const goBack = () => navigation(-1);

  useEffect(() => {
    // apple-iphone-${model}-${storage}gb-${color}
    if (name) {
      (async () => {
        const info = await API.getPhoneInfo(name);
        // setState
        if (info !== null) {
          setPhoneInfo(info);
        } else {
          alert("Ошибка");
        }
      })();
    }
  }, [name]);

  useEffect(() => {
    dispatch(setCategoryId(1));
  }, []);
  return (
    <FlexContainer flexDirection="column">
      <FlexContainer cursor="pointer" marginBottom="14px" onClick={goBack}>
        <img src={ArrowLeft} alt="" />
        <PrimaryTextSpan fontSize="16px" fontWeight={600}>
          Back
        </PrimaryTextSpan>
      </FlexContainer>
      <PrimaryTextSpan fontSize="32px" fontWeight="bold">
        {phoneInfo?.name}
      </PrimaryTextSpan>
      <FlexContainer gap="64px" margin="40px 0 0 ">
        {phoneInfo && <SelectorImage phoneInfo={phoneInfo} />}
        <FlexContainer flexDirection="column" maxWidth="320px">
          {phoneInfo && <SelectorColor phoneInfo={phoneInfo} />}
          {phoneInfo && <SelectorCapacity phoneInfo={phoneInfo} />}
          <FlexContainer margin="32px 0 0 " flexDirection="column">
            <FlexContainer alignItems="center">
              <PrimaryTextSpan
                fontWeight={700}
                fontSize="32px"
                marginRight="8px"
              >
                ${phoneInfo?.priceDiscount}
              </PrimaryTextSpan>
              <PrimaryTextSpan
                fontSize="22px"
                textDecorationLine="line-through"
              >
                ${phoneInfo?.priceRegular}
              </PrimaryTextSpan>
            </FlexContainer>

            <FlexContainer></FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        flexDirection="row"
        justifyContent="space-between"
        margin="80px 0"
      >
        <DescriptionAbout descriptionInfo={phoneInfo?.description || []} />
        <DescriptionTechSpecs phoneInfo={phoneInfo} />
      </FlexContainer>
    </FlexContainer>
  );
};
export default DescriptionPhone;
