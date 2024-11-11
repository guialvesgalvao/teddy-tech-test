import CustomerList from "./pages/customers-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomerList />
      <Toaster position="bottom-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}

export default App;
