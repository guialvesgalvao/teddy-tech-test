import { Menu, LogOut } from "lucide-react";
import { useSidebarStore } from "@/shared/stores/sidebar-store";
import Logo from "@/assets/image.png";
import { deleteUserCookie } from "@/shared/helpers/deleteUserCookie";
import { useUserStore } from "@/shared/stores/user-store";
import { getUserCookie } from "@/shared/helpers/getUserCookie";

export function Header() {
  const { toggleSidebar } = useSidebarStore();
  const { userName, setUserName } = useUserStore();

  function logout() {
    console.log("oi");
    deleteUserCookie();
    setUserName(null);

    let x = getUserCookie();
    console.log(x);
  }

  return (
    <header className="w-full bg-white text-black flex items-center justify-between p-4">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="mr-2"
          aria-label="Open Sidebar"
        >
          <Menu size={24} />
        </button>

        <img src={Logo} alt="Logo" className="h-12 w-auto ml-6" />
      </div>

      <div className="flex items-center">
        <div className="hidden lg:flex items-center">
          <span className="mr-2">
            Olá, <strong>{userName}</strong>!
          </span>
          <button onClick={() => logout()} aria-label="Sign Out">
            <LogOut size={24} />
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => logout()} aria-label="Sign Out">
            <LogOut size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
