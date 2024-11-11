import { useState } from "react";
import {
  deleteCustomer,
  editCustomer,
} from "@/shared/repositories/customers-repo";
import { useCustomerStore } from "@/shared/stores/use-customer-store";
import { Plus, Edit3, Trash2, Minus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { formatToReal } from "@/shared/helpers/format-real";

interface ICustomer {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
}

interface ICustomerCardProps {
  client: ICustomer;
  isListedTab: boolean;
}

export function CustomerCard({ client, isListedTab }: ICustomerCardProps) {
  const queryClient = useQueryClient();

  const { id, name, salary, companyValuation } = client;
  const { addCustomer, removeCustomer, updateCustomer, customersSelected } =
    useCustomerStore();

  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editSalary, setEditSalary] = useState(salary);
  const [editValuation, setEditValuation] = useState(companyValuation);

  let isSelected = customersSelected.some((customer) => customer.id === id);

  const handleAddCustomer = () => {
    addCustomer(client);
  };

  const handleDecreaseState = () => {
    removeCustomer(id);
  };

  const handleDeleteCustomer = async () => {
    await deleteCustomer(id);
    setShowDeleteDialog(false);
    updateCustomer(client);
    toast.success("Cliente excluído com sucesso");
    queryClient.invalidateQueries({ queryKey: ["clients"] });
  };

  const handleEditCustomer = async () => {
    const updatedClient = {
      id,
      name: editName,
      salary: editSalary,
      companyValuation: editValuation,
    };
    await editCustomer(updatedClient);
    setIsEditing(false);
    updateCustomer(client);
    toast.success("Cliente atualizado com sucesso");
    queryClient.invalidateQueries({ queryKey: ["clients"] });
  };

  return (
    <div
      className={`p-4 rounded shadow-md transition-colors ${
        isSelected ? "cardActive" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <strong>{name}</strong>
        <p>Salário: {formatToReal(salary)}</p>
        <p>Empresa: {formatToReal(companyValuation)}</p>
      </div>

      <div className={`flex flex-row items-center ${isListedTab ? 'justify-between' : 'justify-end'}` }>
      {isListedTab && (
        <button
          onClick={handleAddCustomer}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          <Plus size={16} />
        </button>
      )}

      {isListedTab && (
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogTrigger asChild>
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
              <Edit3 size={16} />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Cliente</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Name"
              />
              <Input
                type="number"
                value={editSalary}
                onChange={(e) => setEditSalary(Number(e.target.value))}
                placeholder="Salary"
              />
              <Input
                type="number"
                value={editValuation}
                onChange={(e) => setEditValuation(Number(e.target.value))}
                placeholder="Company Valuation"
              />
            </div>
            <DialogFooter>
              <Button
                style={{ backgroundColor: "#d26f39" }}
                onClick={handleEditCustomer}
              >
                Salvar
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancelar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {isListedTab && (
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogTrigger asChild>
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
              <Trash2 size={16} color="#d26f39" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirmar Exclusão</DialogTitle>
            </DialogHeader>
            <p>
              Você está prestes a excluir o cliente: <strong>{name}</strong>
            </p>
            <DialogFooter>
              <Button
                style={{ backgroundColor: "#d26f39" }}
                variant="destructive"
                onClick={handleDeleteCustomer}
              >
                Excluir Cliente
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowDeleteDialog(false)}
              >
                Cancelar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {!isListedTab && (
        <button
          onClick={handleDecreaseState}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          <Minus size={16} className="text-gray-700" />
        </button>
      )}
      </div>
    </div>
  );
}
