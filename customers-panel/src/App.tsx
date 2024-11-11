import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectedCustomers from "./pages/selected-customers";
import CustomerList from "./pages/customers-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/selected-customers" element={<SelectedCustomers />} />
        </Routes>
      </Router>
      <Toaster position="bottom-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}

export default App;
