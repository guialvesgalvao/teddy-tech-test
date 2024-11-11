import { create } from 'zustand';
import { ICustomer } from '../interfaces/ICustomer';

interface CustomerStore {
    customersSelected: ICustomer[];
    addCustomer: (customer: ICustomer) => void;
    removeCustomer: (id: number) => void;
    updateCustomer: (updatedCustomer: ICustomer) => void;
}

export const useCustomerStore = create<CustomerStore>((set) => ({
    customersSelected: [],
    
    addCustomer: (customer) => set((state) => ({
        customersSelected: [...state.customersSelected, customer],
    })),

    removeCustomer: (id) => set((state) => ({
        customersSelected: state.customersSelected.filter((customer) => customer.id !== id),
    })),

    updateCustomer: (updatedCustomer) => set((state) => ({
        customersSelected: state.customersSelected.map((customer) =>
            customer.id === updatedCustomer.id ? updatedCustomer : customer
        ),
    })),
}));
