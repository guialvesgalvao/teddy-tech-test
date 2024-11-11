import { ROUTES } from "@/shared/consts/routes";
import { useSidebarStore } from "@/shared/stores/sidebar-store";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Logo from "@/assets/image.png";

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const routes = ROUTES.filter((route) => route.showInSidebar);

  return (
    <Sheet open={isOpen} onOpenChange={toggleSidebar}>
      <SheetContent side="left" className="w-64 bg-white text-black p-4">
        <div className="flex justify-center items-center mb-8">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </div>

        <ul>
          {routes.map((route) => (
            <li key={route.path} className="flex items-center mb-4">
              <route.icon />
              <span className="font-medium ml-4">{route.name}</span>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
