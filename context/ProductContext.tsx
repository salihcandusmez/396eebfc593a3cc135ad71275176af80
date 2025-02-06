"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { IProductListItem } from "@/components/ProductListItem/ProductListItem.types";
import { getProducts } from "@/service/product.service";

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
  const [products, setProducts] = useState<IProductListItem[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProductListItem[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true); // İlk yükleme kontrolü

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Veriler yüklenirken loading durumu
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
      setIsLoading(false); // Veriler yüklendiğinde loading'i kapat
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) =>
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
        isLoading,
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
