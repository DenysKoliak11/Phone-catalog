import { IPhoneType } from "../types/AllType";

class API {
  getPhoneInfo = async (name: string): Promise<IPhoneType | null> => {
    let response = null;
    try {
      response = (await require(`../assets/products/${name}.json`)) || null;
    } catch (error) {}

    return response;
  };
}
export default new API();
