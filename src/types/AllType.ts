import { ModelColorEnum } from "../constant/ModelColors";
export type PhoneDescriptionType = {
  title: string;
  text: string[];
};
export type SlidePhones = {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
};
export interface SliderPropsType {
  phones: SlidePhones[];
}
export type PhonesType = {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
};
export type IPhoneType = {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: ModelColorEnum[];
  color: ModelColorEnum;
  images: string[];
  description: PhoneDescriptionType[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
};

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  image: string;
  count: number;
  phoneId: string;
};

export interface CartState {
  totalPrice: number;
  cartItems: CartItemType[];
}
