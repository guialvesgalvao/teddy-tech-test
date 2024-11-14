import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LoginUserForm } from "./login-user-form"; // Ajuste o caminho conforme necessário

vi.mock("@/shared/schemas/login-user-schema", () => ({
  LoginUserSchema: {
    parse: vi.fn().mockReturnValue(true), // Retorna verdadeiro para validações positivas
  },
}));

describe("Testes para o componente LoginUserForm", () => {
  const mockSubmit = vi.fn();

  const renderComponent = () => {
    render(<LoginUserForm onSubmit={mockSubmit} />);
  };

  it("Deve renderizar o formulário com os campos de nome e senha", () => {
    renderComponent();

    // Verifica se o campo de nome está presente
    const nameInput = screen.getByLabelText("Nome");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute("type", "name");

    // Verifica se o campo de senha está presente
    const passwordInput = screen.getByLabelText("Senha");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should display the submit button with correct label", () => {
    renderComponent();

    // Verifica se o botão de submit está presente e com o texto correto
    const submitButton = screen.getByRole("button", { name: /entrar/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Entrar");
  });


});
