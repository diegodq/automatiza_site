import { createContext, Dispatch, SetStateAction, Context } from "react";

export type ProductsType = {
  id: string;
  thumbnail: string;
  title: string;
  price: string;
}

export type MyContextType = {
  product: ProductsType[];
  setProduct: Dispatch<SetStateAction<ProductsType[]>>
}

const AppContext:Context<MyContextType | undefined> = createContext<MyContextType | undefined>(undefined);
export default AppContext;