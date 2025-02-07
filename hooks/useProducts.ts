import { useEffect, useState, useTransition } from "react";

import { IProductListItem } from "@/components/ProductListItem/ProductListItem.types";
import { getProducts } from "@/service/product.service";

export const useProducts = () => {
  const [products, setProducts] = useState<IProductListItem[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProductListItem[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    startTransition(() => {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    });
  };

  return { products, filteredProducts, searchTerm, handleSearch, isPending };
};
