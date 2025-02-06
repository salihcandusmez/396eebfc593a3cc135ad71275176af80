"use client";

import { ProductProvider, useProductContext } from "@/context/ProductContext";
import React, { Suspense } from "react";

import Pagination from "@/components/Pagination/Pagination";
import ProductList from "@/components/ProductList/ProductList";
import SearchBar from "@/components/SearchBar/SearchBar";

const ProductsPage = () => {
  return (
    <ProductProvider>
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductListWithData />
      </Suspense>
    </ProductProvider>
  );
};

const ProductListWithData = () => {
  const {
    filteredProducts,
    currentPage,
    setCurrentPage,
    pageSize,
    total,
    searchTerm,
    setSearchTerm,
    isLoading,
  } = useProductContext();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <section className="container">
      <SearchBar onSearch={setSearchTerm} />
      <ProductList products={paginatedProducts} />
      {total > pageSize && (
        <Pagination
          current={currentPage}
          onChange={setCurrentPage}
          pageSize={pageSize}
          total={total}
        />
      )}
    </section>
  );
};

export default ProductsPage;
