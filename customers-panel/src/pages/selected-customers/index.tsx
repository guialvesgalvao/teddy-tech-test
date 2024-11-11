import { useCustomerStore } from '../../shared/stores/use-customer-store';

export default function CustomersSelected () {
    const { customersSelected, removeCustomer } = useCustomerStore();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Selected Clients</h1>
            {customersSelected.length === 0 ? (
                <p>No clients selected</p>
            ) : (
                <ul>
                    {customersSelected.map((client) => (
                        <li key={client.id} className="mb-2 p-2 border rounded">
                            <div>
                                <h3>{client.name}</h3>
                                <p>Salary: {client.salary}</p>
                                <p>Company Valuation: {client.companyValuation}</p>
                                <button
                                    className="bg-red-500 text-white px-4 py-1 rounded"
                                    onClick={() => removeCustomer(client.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
