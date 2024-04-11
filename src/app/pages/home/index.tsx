import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { getProducts } from "@/app/data/products";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import * as S from "./styles";

export default function HomePage() {
  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getProducts,
  // });

  return (
    <S.ContainerHome>
      <Header />

      {/* {isLoading ? (
        <h2>Carregando...</h2>
      ) : (
        products?.map((product) => {
          return (
            <ul key={product.id}>
              <li>{product.name}</li>
            </ul>
          );
        })
      )}

      <div className='footer'>
        <Footer />
      </div> */}
    </S.ContainerHome>
  );
}
