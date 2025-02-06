import { IProductListItem } from "@/components/ProductListItem/ProductListItem.types";
import api from "@/api";

export const getProducts = async (): Promise<IProductListItem[]> => {
  try {
    const response = await api.get("/products");
    return response.data.products.map((product: any) => ({
      id: product.id,
      title: product.title,
      price: product.variants[0]?.price || "N/A",
      stock: product.variants[0]?.inventory_quantity || 0,
      image: product.image?.src || "https://placehold.co/50x50",
      vendor: product.vendor,
      productType: product.product_type,
    }));
  } catch (error) {
    console.error("Ürünleri çekerken hata oluştu:", error);
    return [];
  }
};
