import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "@/app/components/skeleton";

describe("Skeleton", () => {
  it("Renderizar Skeleton com largura, altura e borda correta", () => {
    const width = 217;
    const height = 285;
    const borderRadius = 8;

    render(
      <Skeleton width={width} height={height} borderRadius={borderRadius} />
    );

    const skeletonElement = screen.getByTestId("container-skeleton");

    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement).toHaveStyle(`width: ${width}px`);
    expect(skeletonElement).toHaveStyle(`height: ${height}px`);
    expect(skeletonElement).toHaveStyle(`border-radius: ${borderRadius}px`);
  });
});

