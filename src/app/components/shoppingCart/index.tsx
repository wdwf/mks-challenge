import React from "react";
import { ShoppingCartIcon } from "lucide-react";
import * as S from "./styles";

export function ShoppingCart() {
  return (
    <S.ContainerShoppingCart data-testid='shopping-cart'>
      <ShoppingCartIcon size={24} />
      <span>0</span>
    </S.ContainerShoppingCart>
  );
}

