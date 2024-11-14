import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from ".";
import { useSidebarStore } from "@/shared/stores/sidebar-store";

vi.mock("@/shared/stores/sidebar-store", () => ({
  useSidebarStore: vi.fn(),
}));

vi.mock("@/shared/consts/routes", () => ({
  ROUTES: [
    { path: "/home", name: "Home", showInSidebar: true, icon: () => <svg /> },
    { path: "/about", name: "About", showInSidebar: true, icon: () => <svg /> },
    { path: "/hidden", name: "Hidden", showInSidebar: false, icon: () => <svg /> },
  ],
}));

describe("Testes para o componente de Sidebar", () => {
  const toggleSidebarMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    (useSidebarStore as any).mockReturnValue({
      isOpen: true,
      toggleSidebar: toggleSidebarMock,
    });
  });

  it("deve renderizar a sidebar com as rotas filtradas", () => {
    render(<Sidebar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();

    expect(screen.queryByText("Hidden")).not.toBeInTheDocument();
  });

  it("deve exibir o logo", () => {
    render(<Sidebar />);

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("image.png"));
  });
});
