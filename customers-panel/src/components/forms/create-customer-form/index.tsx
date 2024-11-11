import { useState } from "react";
import { createCustomer } from "@/shared/repositories/customers-repo";
import { useQueryClient } from "@tanstack/react-query";
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
import { toast } from "react-hot-toast";

export function CreateCustomerForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState<number | "">("");
  const [companyValuation, setCompanyValuation] = useState<number | "">("");
  const queryClient = useQueryClient();

  const handleCreateCustomer = async () => {
    if (!name || !salary || !companyValuation) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newCustomer = {
      name,
      salary: Number(salary),
      companyValuation: Number(companyValuation),
    };

    try {
      await createCustomer(newCustomer);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      setName("");
      setSalary("");
      setCompanyValuation("");
      setIsOpen(false);

      toast.success("O novo cliente foi criado com sucesso.");
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      toast.error("Não foi possível criar o cliente.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          style={{ borderColor: "#d26f39", color: "#d26f39" }}
          variant="outline"
          className="w-full mt-4"
        >
          Criar cliente
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar cliente</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome:"
          />
          <Input
            type="number"
            value={salary}
            onChange={(e) =>
              setSalary(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Digite o salário:"
          />
          <Input
            type="number"
            value={companyValuation}
            onChange={(e) =>
              setCompanyValuation(
                e.target.value === "" ? "" : Number(e.target.value)
              )
            }
            placeholder="Digite o valor da empresa:"
          />
        </div>
        <DialogFooter>
          <Button
            style={{ backgroundColor: "#d26f39", color: "#fff" }}
            onClick={handleCreateCustomer}
          >
            Criar cliente
          </Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
