import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LogoMark } from "./logo-mark"; 
import TeddyLogo from "../../assets/image.png"; 

describe("Testes no compononente de Logo", () => {
  it("Deve renderizar a logo pulsando quando o efeito está desativado", () => {
    render(<LogoMark isPulsing={false} />);

    const logoImage = screen.getByAltText("Teddy Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", TeddyLogo);
  });

  it("Deve exibir a log pulsando quando o parâmetro de pulsar está ativo", () => {
    render(<LogoMark isPulsing={true} />);

    const pulsingDiv = screen.getByRole("img", { hidden: true });
    expect(pulsingDiv).toBeInTheDocument();

    const logoImage = screen.getByAltText("Teddy Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", TeddyLogo);
  });

});
