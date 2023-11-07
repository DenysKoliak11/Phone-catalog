import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../network/API";
import { FlexContainer } from "../styles/components/FlexContainer";
import {
  CartItemType,
  FavoritesItemType,
  IPhoneType,
  PhonesType,
} from "../types/AllType";
import { PrimaryTextSpan } from "../styles/components/PrimaryTextSpan";
import SelectorCapacity from "../components/Description/SelectorCapacity";
import SelectorColor from "../components/Description/SelectorColor";
import SelectorImage from "../components/Description/SelectorImage";
import DescriptionAbout from "../components/Description/DescriptionAbout";
import DescriptionTechSpecs from "../components/Description/DescriptionTechSpecs";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slice/filterSlice";

import { SelectedContainer } from "../styles/components/SelectedContainer";
import { PhoneCustomization } from "../styles/components/PhoneCustomization";
import { RootState } from "../redux/store";
import { CartAddButton } from "../styles/components/CartAddButton";
import { addCart } from "../redux/slice/cartSlice";
import FavoriteButton from "../styles/components/FavoriteButton";
import { addFavorite } from "../redux/slice/favoritesSlice";
import TechSpecsContainer from "../styles/components/TechSpecsContainer";
import BackButton from "../components/BackButton/BackButton";
import styled from "@emotion/styled";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const DescriptionPhone = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { name } = useParams<{ name: string }>();
  const [phoneInfo, setPhoneInfo] = useState<IPhoneType | null>(null);
  const findCartItem = useSelector((state: RootState) =>
    state.cart.cartItems.find((item) => item.name === phoneInfo?.name)
  );
  const findFavoritesItem = useSelector((state: RootState) =>
    state.favorites.itemFavorites.find((item) => item.name === phoneInfo?.name)
  );
  const DescribeWrapper = styled.div`
    flex-direction: column;
    padding: 0 15px;
    margin: 25px 0 80px;
  `;

  const goBack = () => navigation(-1);

  const onClickCart = (namePhone: string) => {
    const phoneLookup = require("../assets/products.json").find(
      (elem: PhonesType) => elem.name === namePhone
    );
    const item: CartItemType = {
      id: phoneLookup.id,
      name: phoneLookup.name,
      image: phoneLookup.image,
      price: phoneLookup.price,
      phoneId: phoneLookup.phoneId,
      count: 1,
    };
    dispatch(addCart(item));
  };
  const onClickAddFavorites = (name: string) => {
    const phoneLookup = require("../assets/products.json").find(
      (elem: PhonesType) => elem.name === name
    );
    const item: FavoritesItemType = {
      id: phoneLookup.id,
      name: phoneLookup.name,
      fullPrice: phoneLookup.fullPrice,
      price: phoneLookup.price,
      screen: phoneLookup.screen,
      capacity: phoneLookup.capacity,
      ram: phoneLookup.rem,
      image: phoneLookup.image,
      phoneId: phoneLookup.phoneId,
    };
    dispatch(addFavorite(item));
  };
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
    <DescribeWrapper>
      <Breadcrumbs />
      <BackButton goBack={goBack} />

      <PrimaryTextSpan fontSize="32px" fontWeight="bold">
        {phoneInfo?.name}
      </PrimaryTextSpan>
      <PhoneCustomization gap="64px" margin="40px 0 0 ">
        {phoneInfo && <SelectorImage phoneInfo={phoneInfo} />}
        <SelectedContainer flexDirection="column">
          {phoneInfo && <SelectorColor phoneInfo={phoneInfo} />}
          {phoneInfo && <SelectorCapacity phoneInfo={phoneInfo} />}
          <FlexContainer margin="32px 0 0 " flexDirection="column" gap="16px">
            <SelectedContainer alignItems="center">
              <PrimaryTextSpan
                fontWeight={700}
                fontSize="32px"
                marginRight="8px"
              >
                ${phoneInfo?.priceDiscount}
              </PrimaryTextSpan>
              <PrimaryTextSpan
                fontSize="22px"
                color="#89939A"
                textDecorationLine="line-through"
              >
                ${phoneInfo?.priceRegular}
              </PrimaryTextSpan>
            </SelectedContainer>
            <SelectedContainer gap="8px" justifyContent="space-between">
              <CartAddButton
                width="100%"
                padding="14px 0"
                maxWidth="260px"
                fontWeight={700}
                color={findCartItem ? "#27ae60" : "#fff"}
                textAlign="center"
                background={findCartItem ? "#fff" : "#313237"}
                border={findCartItem ? "1px solid #E2E6E9" : "none"}
                onClick={() => onClickCart(phoneInfo?.name || "")}
              >
                {findCartItem ? "Added to cart" : "Add to cart"}
              </CartAddButton>
              <FavoriteButton
                onClick={() => onClickAddFavorites(phoneInfo?.name || "")}
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  stroke="#333"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3 0.298767C10.7264 0.298767 10.1584 0.411782 9.62852 0.631356C9.09865 0.850909 8.61711 1.17281 8.21162 1.57846L8.00005 1.79003L7.78835 1.57834C6.96928 0.759273 5.85839 0.299124 4.70005 0.299124C3.54171 0.299124 2.43081 0.759273 1.61174 1.57834C0.792668 2.39741 0.33252 3.50831 0.33252 4.66665C0.33252 5.82499 0.792668 6.93589 1.61174 7.75496L7.50507 13.6483C7.77844 13.9217 8.22165 13.9217 8.49502 13.6483L14.3884 7.75496C14.794 7.34947 15.1158 6.86805 15.3353 6.33817C15.5549 5.80825 15.6679 5.24026 15.6679 4.66665C15.6679 4.09304 15.5549 3.52505 15.3353 2.99513C15.1158 2.46531 14.7941 1.98392 14.3885 1.57846C13.983 1.17276 13.5015 0.85093 12.9716 0.631356C12.4416 0.411782 11.8737 0.298767 11.3 0.298767Z"
                    fill={findFavoritesItem ? "#EB5757" : "#fff"}
                    stroke={findFavoritesItem ? "#EB5757" : "#313237"}
                  />
                </svg>
              </FavoriteButton>
            </SelectedContainer>
            <TechSpecsContainer flexDirection="column" gap="8px">
              <TechSpecsContainer justifyContent="space-between">
                <PrimaryTextSpan fontSize="14px" color="#89939A">
                  Screen
                </PrimaryTextSpan>
                <PrimaryTextSpan
                  fontSize="14px"
                  color="#313237"
                  fontWeight={600}
                >
                  {phoneInfo?.screen}
                </PrimaryTextSpan>
              </TechSpecsContainer>
              <TechSpecsContainer justifyContent="space-between">
                <PrimaryTextSpan fontSize="14px" color="#89939A">
                  Resolution
                </PrimaryTextSpan>
                <PrimaryTextSpan
                  fontSize="14px"
                  color="#313237"
                  fontWeight={600}
                >
                  {phoneInfo?.resolution}
                </PrimaryTextSpan>
              </TechSpecsContainer>
              <TechSpecsContainer justifyContent="space-between">
                <PrimaryTextSpan fontSize="14px" color="#89939A">
                  Processor
                </PrimaryTextSpan>
                <PrimaryTextSpan
                  fontSize="14px"
                  color="#313237"
                  fontWeight={600}
                >
                  {phoneInfo?.processor}
                </PrimaryTextSpan>
              </TechSpecsContainer>
              <TechSpecsContainer justifyContent="space-between">
                <PrimaryTextSpan fontSize="14px" color="#89939A">
                  RAM
                </PrimaryTextSpan>
                <PrimaryTextSpan
                  fontSize="14px"
                  color="#313237"
                  fontWeight={600}
                >
                  {phoneInfo?.ram}
                </PrimaryTextSpan>
              </TechSpecsContainer>
            </TechSpecsContainer>
          </FlexContainer>
        </SelectedContainer>
      </PhoneCustomization>
      <FlexContainer
        flexDirection="row"
        justifyContent="space-between"
        gap="30px"
        margin="30px 0 0"
      >
        <DescriptionAbout descriptionInfo={phoneInfo?.description || []} />
        <DescriptionTechSpecs phoneInfo={phoneInfo} />
      </FlexContainer>
    </DescribeWrapper>
  );
};
export default DescriptionPhone;
