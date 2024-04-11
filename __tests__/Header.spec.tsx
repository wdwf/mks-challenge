import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/pages/home";
import { Header } from "@/app/components/header";

describe("Header", () => {
  it("Renderizar cabeçalho", () => {
    render(<HomePage />);

    const heading = screen.getByRole("banner");

    expect(heading).toBeInTheDocument();
  });
  it("Renderizar titulo maior e titulo menor", () => {
    render(<Header />);

    const biggerTitle = screen.getByText("MKS");
    const minorTitle = screen.getByText("Sistemas");

    expect(biggerTitle).toBeInTheDocument();
    expect(minorTitle).toBeInTheDocument();
  });

  it("Renderizar componente ShoppingCart", () => {
    render(<Header />);

    const shoppingCart = screen.getByTestId("shopping-cart");

    expect(shoppingCart).toBeInTheDocument();
  });
});

