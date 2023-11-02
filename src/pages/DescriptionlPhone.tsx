import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../network/API";
import { FlexContainer } from "../styles/components/FlexContainer";
import { IPhoneType } from "../types/PhoneType";
import { PrimaryTextSpan } from "../styles/components/PrimaryTextSpan";
import SelectorCapacity from "../components/Description/SelectorCapacity";
import SelectorColor from "../components/Description/SelectorColor";
import SelectorImage from "../components/Description/SelectorImage";
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
          // redirect to 404
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
          {phoneInfo?.description.map((obj, index) => (
            <FlexContainer
              key={index}
              flexDirection="column"
              marginBottom="32px"
            >
              <PrimaryTextSpan
                fontWeight={600}
                marginBottom="16px"
                fontSize="20px"
              >
                {obj.title}
              </PrimaryTextSpan>
              {obj?.text.map((text) => (
                <PrimaryTextSpan key={text} marginBottom="20px" color="#89939A">
                  {text}
                </PrimaryTextSpan>
              ))}
            </FlexContainer>
          ))}
        </FlexContainer>
        <FlexContainer maxWidth="520px" width="100%" flexDirection="column">
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
          <FlexContainer flexDirection="column">
            <FlexContainer justifyContent="space-between" marginBottom="8px">
              <PrimaryTextSpan
                fontSize="14px"
                lineHeight="21px"
                color="#89939A"
              >
                Screen
              </PrimaryTextSpan>
              <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
                {phoneInfo?.screen}
              </PrimaryTextSpan>
            </FlexContainer>
            <FlexContainer justifyContent="space-between" marginBottom="8px">
              <PrimaryTextSpan
                fontSize="14px"
                lineHeight="21px"
                color="#89939A"
              >
                Resolution
              </PrimaryTextSpan>
              <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
                {phoneInfo?.resolution}
              </PrimaryTextSpan>
            </FlexContainer>
            <FlexContainer justifyContent="space-between" marginBottom="8px">
              <PrimaryTextSpan
                fontSize="14px"
                lineHeight="21px"
                color="#89939A"
              >
                Processor
              </PrimaryTextSpan>
              <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
                {phoneInfo?.processor}
              </PrimaryTextSpan>
            </FlexContainer>
            <FlexContainer justifyContent="space-between" marginBottom="8px">
              <PrimaryTextSpan
                fontSize="14px"
                lineHeight="21px"
                color="#89939A"
              >
                RAM
              </PrimaryTextSpan>
              <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
                {phoneInfo?.ram}
              </PrimaryTextSpan>
            </FlexContainer>
            <FlexContainer justifyContent="space-between" marginBottom="8px">
              <PrimaryTextSpan
                fontSize="14px"
                lineHeight="21px"
                color="#89939A"
              >
                Built in memory
              </PrimaryTextSpan>
              <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
                {phoneInfo?.capacity}
              </PrimaryTextSpan>
            </FlexContainer>
            <FlexContainer justifyContent="space-between" marginBottom="8px">
              <PrimaryTextSpan
                fontSize="14px"
                lineHeight="21px"
                color="#89939A"
              >
                Camera
              </PrimaryTextSpan>
              <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
                {phoneInfo?.camera}
              </PrimaryTextSpan>
            </FlexContainer>
            <FlexContainer justifyContent="space-between" marginBottom="8px">
              <PrimaryTextSpan
                fontSize="14px"
                lineHeight="21px"
                color="#89939A"
              >
                Zoom
              </PrimaryTextSpan>
              <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
                {phoneInfo?.zoom}
              </PrimaryTextSpan>
            </FlexContainer>
            <FlexContainer justifyContent="space-between" marginBottom="8px">
              <PrimaryTextSpan
                fontSize="14px"
                lineHeight="21px"
                color="#89939A"
              >
                Cell
              </PrimaryTextSpan>
              <PrimaryTextSpan fontSize="14px" color="#313237" fontWeight={600}>
                {phoneInfo?.cell.join(", ")}
              </PrimaryTextSpan>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
export default DescriptionPhone;
