import * as S from "./styles";

interface SkeletonProps {
  width: number | string;
  height: number | string;
  borderRadius?: number;
}

export function Skeleton({ width, height, borderRadius }: SkeletonProps) {
  return (
    <S.ContainerSkeleton
      data-testid={`container-skeleton`}
      style={{ width, height, borderRadius }}
    />
  );
}

