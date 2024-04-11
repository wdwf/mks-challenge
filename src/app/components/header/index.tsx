import { ShoppingCart } from "../shoppingCart";
import * as S from "./styles";

export function Header() {
  return (
    <S.ContainerHeader>
      <S.TitleHeader>
        <S.BiggerTitle>MKS</S.BiggerTitle>
        <S.MinorTitle>Sistemas</S.MinorTitle>
      </S.TitleHeader>
      <ShoppingCart />
    </S.ContainerHeader>
  );
}

