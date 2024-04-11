import { getProducts } from "@/app/data/products";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function HomePage() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(products);

  if (isLoading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div>
      {products?.map((product) => {
        return (
          <ul key={product.id}>
            <li>{product.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

