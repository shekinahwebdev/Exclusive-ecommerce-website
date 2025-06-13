import { createContext, useContext } from "react";
import type { Product } from "../interface";

export const ProductContext = createContext<Product[]>([]);

export const useHomePageContext = () => useContext(ProductContext);
