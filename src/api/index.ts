import axios, { AxiosInstance } from "axios";

// Crie uma instância do Axios com as configurações
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
