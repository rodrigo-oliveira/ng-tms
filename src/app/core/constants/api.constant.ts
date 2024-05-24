import { environment } from '../../../environments/environment';

export const BASE_API = environment.apiUrl;
export const CUSTOMERS_API = `${BASE_API}/clientes`;
export const CUSTOMERS_SEND_API = `${BASE_API}/atualizar-cliente`;
export const VEHICLES_API = `${BASE_API}/veiculos`;
export const VEHICLES_BRANDS_API = `${BASE_API}/marcas-veiculos`;
export const VEHICLES_MODELS_API = `${BASE_API}/modelos-veiculos`;
export const VEHICLES_SEND_API = `${BASE_API}/atualizar-veiculo`;
