import { Footer } from "@/app/components/footer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("Renderizar rodapé", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
  it("Renderizar texto no roda pé", () => {
    render(<Footer />);

    const footer = screen.getByText(
      "MKS sistemas © Todos os direitos reservados"
    );
    expect(footer).toBeInTheDocument();
  });
});

