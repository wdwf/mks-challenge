import { useContext, useState } from "react";
import * as S from "./styles";
import { ShoppingBag } from "lucide-react";
import { ProductProps, useCart } from "@/app/context/cardContext";

export function CardProduct({ product }: { product: ProductProps }) {
  const context = useContext(useCart);

  function addProductToCart() {
    context.addProductToCart({ item: product!, qty: 1 });
  }

  return (
    <S.ContainerCard>
      <S.Image
        src={product.photo}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: "auto", height: "57px" }}
        alt='Products'
      />
      <S.InfoProduct>
        <h3>{product.name}</h3>
        <div>
          {Number(product.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </S.InfoProduct>
      <S.DescriptionProduct>
        Redesigned from scratch and completely revised.
      </S.DescriptionProduct>
      <S.ButtonBuy onClick={addProductToCart}>
        <ShoppingBag size={20} />
        COMPRAR
      </S.ButtonBuy>
    </S.ContainerCard>
  );
}

