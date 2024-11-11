import { ICustomer } from "@/shared/interfaces/ICustomer";
import NumberSelector from "../number-selector";

interface IQuantityManagerProps {
  clients: ICustomer[];
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

export function QuantityManager({
  limit,
  setLimit,
  clients,
}: Readonly<IQuantityManagerProps>) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
      <p className="text-center sm:text-left">
        <span className="font-semibold">{clients?.length}</span> clientes
        encontrados
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <label className="text-sm">Clientes por página:</label>
        <NumberSelector limit={limit} setLimit={setLimit} />
      </div>
    </div>
  );
}
