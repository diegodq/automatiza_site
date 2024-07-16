import { createContext, Dispatch, SetStateAction, Context } from "react";

export type TypeProduct = {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
}

export type MyContextType = {
  products: TypeProduct[];
  setProducts: Dispatch<SetStateAction<TypeProduct[]>>;
}

const AppContext:Context<MyContextType | undefined> = createContext<MyContextType | undefined>(undefined);
export default AppContext;