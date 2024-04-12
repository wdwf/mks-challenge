import React, { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import * as S from "./styles";
import { useCart } from "@/app/context/cardContext";
import { MiniCardProduct } from "../miniCardProduct";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

interface ShoppingCartProps {
  toggleShopCart: () => void;
  isOpenShopCart: boolean;
}

export function ShoppingCart({
  toggleShopCart,
  isOpenShopCart,
}: ShoppingCartProps) {
  const context = useContext(useCart);

  return (
    <S.ContainerShoppingCart data-testid='shopping-cart'>
      <S.BtnCart onClick={toggleShopCart}>
        <ShoppingCartIcon size={24} />
        <span>{context.cart.length}</span>
      </S.BtnCart>

      <S.ContainerOpenShoppingCart
        className={`${isOpenShopCart ? "open" : ""}`}
      >
        <S.ContainerShoppingCartHeader>
          <S.ShoppingCartTitle>
            Carrinho
            <br /> de Compras
          </S.ShoppingCartTitle>
          <S.ButtonClose onClick={toggleShopCart}>X</S.ButtonClose>
        </S.ContainerShoppingCartHeader>

        <S.ContainerListItens>
          {context.cart.length === 0 ? (
            <p className='noItens'>Sem itens no carrinho...</p>
          ) : (
            context.cart.map((cartItem, index) => (
              <MiniCardProduct key={index} product={cartItem} />
            ))
          )}
        </S.ContainerListItens>
        <S.ContainerTotalPrice>
          <p>Total:</p>
          <p>
            {context.totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </S.ContainerTotalPrice>
        <button
          className={`finalizePurchase ${montserrat.className}`}
          onClick={() => {
            context.clearCartToLocalStorage();
          }}
        >
          Finalizar Compra
        </button>
      </S.ContainerOpenShoppingCart>
    </S.ContainerShoppingCart>
  );
}

