import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../../components/pagination";
import { getCustomers } from "../../shared/repositories/customers-repo";
import { CustomerCard } from "@/components/customer-card";
import { QuantityManager } from "@/components/quantity-manager";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useCustomerStore } from "@/shared/stores/use-customer-store";
import { SkeletonCard } from "@/components/skeleton-card";
import { ICustomer } from "@/shared/interfaces/ICustomer";
import { CreateCustomerForm } from "@/components/forms/create-customer-form";

function CustomerList() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, error } = useQuery({
    queryKey: ["clients", page, limit],
    queryFn: () => getCustomers(page, limit),
  });

  const { customersSelected } = useCustomerStore();

  const gridClasses = "grid gap-4";
  const responsiveGrid = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  if (error) return <div>Error, atualize a aplicação</div>;

  return (
    <div className="container mx-auto p-4 max-h-screen ">
      <QuantityManager limit={limit} setLimit={setLimit} clients={data?.clients || []} />

      <Tabs defaultValue="clients">
        <TabsList className="mb-4">
          <TabsTrigger value="clients">Clientes</TabsTrigger>
          <TabsTrigger value="selected">Clientes Selecionados</TabsTrigger>
        </TabsList>

        <TabsContent value="clients">
          <div className={`${gridClasses} ${responsiveGrid}`}>
            {isLoading
              ? Array.from({ length: limit }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : data.clients.map((client: ICustomer) => (
                  <CustomerCard key={client.id} client={client} isListedTab={true} />
                ))}
          </div>
          <CreateCustomerForm />
          
          {!isLoading && (
            <Pagination
              currentPage={data.currentPage}
              totalPages={data.totalPages}
              onPageChange={(newPage) => setPage(newPage)}
            />
          )}
        </TabsContent>

        <TabsContent value="selected">
          {customersSelected.length === 0 ? (
            <div className="text-center p-4">Nenhum cliente selecionado</div>
          ) : (
            <div className={`${gridClasses} ${responsiveGrid}`}>
              {customersSelected.map((client: ICustomer) => (
                <CustomerCard key={client.id} client={client} isListedTab={false} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default CustomerList;
