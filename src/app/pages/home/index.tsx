import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { getProducts } from "@/app/data/products";
import { useQuery } from "@tanstack/react-query";
import * as S from "./styles";
import { Skeleton } from "@/app/components/skeleton";
import { CardProduct } from "@/app/components/cardProduct";

export function HomePage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <S.ContainerHome>
      <Header />

      {isLoading ? (
        <S.ContainerList>
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} width={217} height={285} borderRadius={8} />
          ))}
        </S.ContainerList>
      ) : (
        <S.ContainerList>
          {products?.map((product) => {
            return <CardProduct product={product} key={product.id} />;
          })}
        </S.ContainerList>
      )}

      <Footer />
    </S.ContainerHome>
  );
}
