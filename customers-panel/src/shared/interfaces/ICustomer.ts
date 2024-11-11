export interface ICustomer {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
}

export interface CustomerRequest {
  name: string;
  salary: number;
  companyValuation: number;
}
