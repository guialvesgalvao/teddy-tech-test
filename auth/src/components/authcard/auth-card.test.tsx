import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AuthCard from "./auth-card"; // Ajuste o caminho conforme necessário

describe("Testes para o componente de card de autenticação", () => {
  it("Deve renderizar o componente com um Título", () => {
    const title = "Login";
    render(
      <AuthCard title={title}>
        <div>Teste</div>
      </AuthCard>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText("Teste")).toBeInTheDocument();
  });

  it("Deve renderizar o componente sem um título", () => {
    render(
      <AuthCard>
        <div>Teste</div>
      </AuthCard>
    );

    expect(screen.getByText("Teste")).toBeInTheDocument();
    expect(screen.queryByRole("heading")).toBeNull();
  });

  it("Deve renderizar o card de autenticação sem o componente de imagem", () => {
    render(
      <AuthCard>
        <div>Teste</div>
      </AuthCard>
    );

    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });
});
