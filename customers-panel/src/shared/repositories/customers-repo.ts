import axios from "axios";
import { CustomerRequest, ICustomer } from "../interfaces/ICustomer";

const api = axios.create({
  baseURL: "https://teddy-tech-test-production.up.railway.app/",
});

export async function getCustomers(page: number, limit: number) {
  try {
    const response = await api.get(`/?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log("Erro ao pegar os dados", error);
  }
}

export async function editCustomer(client: ICustomer) {
  try {
    const response = await api.patch(`${client.id}`, {
      name: client.name,
      salary: client.salary,
      companyValuation: client.companyValuation,
    });

    console.log("Cliente atualizado com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao editar cliente:", error);
    throw error;
  }
}

export async function deleteCustomer(id: number) {
  try {
    await api.delete(`${id}`);
  } catch (error) {
    console.error("Erro ao deletar cliente", error);
  }
}

export async function createCustomer(client: CustomerRequest) {
  try {
    const response = await api.post("", {
      name: client.name,
      salary: client.salary,
      companyValuation: client.companyValuation,
    });

    console.log("Cliente criado com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    throw error;
  }
}
