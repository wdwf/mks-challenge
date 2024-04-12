import { CartListItem, ProductProps, useCart } from "@/app/context/cardContext";
import * as S from "./styles";
import { useContext } from "react";

export function MiniCardProduct({
  product,
}: {
  product: CartListItem<ProductProps>;
}) {
  const context = useContext(useCart);
  return (
    <S.MiniContainerCard>
      <S.Image
        src={product.item.photo}
        width={0}
        height={0}
        sizes='100vw'
        // style={{ width: "auto", height: "57px" }}
        alt='Products'
      />
      <S.InfoProduct>
        <h3 className='titleProduct'>{product.item.name}</h3>
        <div className='conteinerCounter'>
          <p className='title'>Qtd:</p>
          <div className='conteinerCounterBtn'>
            <button
              className='minusBtn'
              onClick={() => context.removeOneProductFromCart(product)}
            >
              -
            </button>
            <span className='qtd'>{product.qty}</span>
            <button
              className='plusBtn'
              onClick={() => context.AddMoreOneProductFromCart(product)}
            >
              +
            </button>
          </div>
        </div>
        <div className='priceProduct'>
          {Number(product.item.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </S.InfoProduct>
      <S.RemoveProduct
        onClick={() => context.removeProductFromCart(product.item)}
      >
        X
      </S.RemoveProduct>
    </S.MiniContainerCard>
  );
}

