import { useEffect, useState } from "react";
import Auth from "authApp/Auth";
import CustomersPanel from "customersPanel/CustomersPanel";
import { Sidebar } from "./components/sidebar/sidebar";
import { Header } from "./components/header";
import { getUserCookie } from "./shared/helpers/getUserCookie";
import { useUserStore } from "./shared/stores/user-store";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const { userName, setUserName } = useUserStore();

  useEffect(() => {
    // Obter o cookie apenas uma vez
    const userCookie = getUserCookie();

    // Verificar e atualizar o estado apenas se necessário
    if (userCookie && !userName) {
      setUserName(userCookie);
    }

    // Marcar a inicialização como concluída
    setIsInitialized(true);
  }, [userName, setUserName]);

  // Mostrar tela de carregamento até que o estado esteja inicializado
  if (!isInitialized) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  // Exibir a tela de autenticação se o cookie não estiver presente
  if (!userName) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Auth />
      </div>
    );
  }

  // Exibir o painel principal
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 p-4 overflow-auto bg-gray-200">
        <CustomersPanel />
      </main>
      <Sidebar />
    </div>
  );
}

export default App;
