import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { Header } from "./header";
import { useSidebarStore } from "@/shared/stores/sidebar-store";
import { useUserStore } from "@/shared/stores/user-store";
import { deleteUserCookie } from "@/shared/helpers/deleteUserCookie";

vi.mock("@/shared/stores/sidebar-store", () => ({
  useSidebarStore: vi.fn(),
}));

vi.mock("@/shared/stores/user-store", () => ({
  useUserStore: vi.fn(),
}));

vi.mock("@/shared/helpers/deleteUserCookie");

describe("Testes no Componente de Cabeçalho", () => {
  const mockToggleSidebar = vi.fn();
  const mockSetUserName = vi.fn();
  //@ts-ignore
  const mockDeleteUserCookie = deleteUserCookie as vi.Mock;

  beforeEach(() => {
    mockToggleSidebar.mockClear();
    mockSetUserName.mockClear();
    mockDeleteUserCookie.mockClear();
    //@ts-ignore
    (useSidebarStore as vi.Mock).mockReturnValue({
      toggleSidebar: mockToggleSidebar,
    });
    //@ts-ignore
    (useUserStore as vi.Mock).mockReturnValue({
      userName: "Test User",
      setUserName: mockSetUserName,
    });
  });

  it("deve chamar toggleSidebar quando o botão do menu for clicado", () => {
    render(<Header />);
    
    fireEvent.click(screen.getByLabelText("Open Sidebar"));
    
    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });

  it("deve renderizar a saudação corretamente quando userName for nulo", () => {
    //@ts-ignore
    (useUserStore as vi.Mock).mockReturnValue({
      userName: null,
      setUserName: mockSetUserName,
    });

    render(<Header />);
    
    expect(screen.getByText(/Olá,/i)).toBeInTheDocument();
    expect(screen.queryByText(/Test User/)).not.toBeInTheDocument();
  });

  it("deve chamar a função logout quando o botão de logout for clicado (visão mobile)", () => {
    render(<Header />);
    
    const logoutButton = screen.getAllByLabelText("Sign Out")[1];
    fireEvent.click(logoutButton);
    
    expect(mockDeleteUserCookie).toHaveBeenCalledTimes(1);

    expect(mockSetUserName).toHaveBeenCalledWith(null);
  });
});
