import { ReactNode, useState } from "react";
import AppContext from "./appContext";
import { MyContextType } from "./appContext";
import { TypeProduct } from "./appContext";

interface ProvidersProps {
  children: ReactNode
}

const Provider: React.FC<ProvidersProps> = ({children}: ProvidersProps) => {
  const [products, setProducts] = useState<TypeProduct[]>([]);

  const value: MyContextType = {
    products,
    setProducts
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider;