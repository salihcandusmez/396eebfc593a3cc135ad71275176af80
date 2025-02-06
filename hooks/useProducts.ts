import { useEffect, useState, useTransition } from "react";

import { getProducts } from "@/service/product.service";

export const useProducts = () => {
  const [products, setProducts] = useState<any>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const data = await getProducts();
      setProducts(data);
    });
  }, []);

  return { products, isPending };
};
