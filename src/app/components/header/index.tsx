import { useState } from "react";
import { ShoppingCart } from "../shoppingCart";
import * as S from "./styles";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleShopCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <S.ContainerHeader>
      <S.TitleHeader>
        <S.BiggerTitle>MKS</S.BiggerTitle>
        <S.MinorTitle>Sistemas</S.MinorTitle>
      </S.TitleHeader>
      <ShoppingCart
        toggleShopCart={toggleShopCart}
        isOpenShopCart={isCartOpen}
      />
    </S.ContainerHeader>
  );
}

