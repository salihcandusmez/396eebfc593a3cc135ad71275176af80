"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { IProductListItem } from "@/components/ProductListItem/ProductListItem.types";
import { useProducts } from "@/hooks/useProducts";

interface ProductContextType {
  products: IProductListItem[];
  filteredProducts: IProductListItem[];
  currentPage: number;
  pageSize: number;
  total: number;
  isLoading: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { products, isPending } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<IProductListItem[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product: IProductListItem) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setCurrentPage(1);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const total = filteredProducts.length;

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        currentPage,
        pageSize,
        total,
        isLoading: isPending,
        searchTerm,
        setSearchTerm,
        setCurrentPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
