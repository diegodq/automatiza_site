import { ReactNode, useState } from "react";
import AppContext from "./appContext";
import { MyContextType } from "./appContext";
import { ProductsType } from "./appContext";

interface ProvidersProps {
  children: ReactNode
}

const Provider: React.FC<ProvidersProps> = ({children}: ProvidersProps) => {
  const [product, setProduct] = useState<ProductsType[]>([]);

  const value: MyContextType = {
    product,
    setProduct
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider;