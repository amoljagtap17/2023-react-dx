import axios, { AxiosError, AxiosResponse } from "axios";

interface ApiMethods {
  get<T = any>(url: string, params?: {}): Promise<AxiosResponse<T>>;
  post<T = any>(url: string, data?: {}): Promise<AxiosResponse<T>>;
  put<T = any>(url: string, data?: {}): Promise<AxiosResponse<T>>;
  patch<T = any>(url: string, data?: {}): Promise<AxiosResponse<T>>;
  remove<T = any>(url: string, params?: {}): Promise<AxiosResponse<T>>;
}

export const createApiInstance = (baseURL: string): ApiMethods => {
  const axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      return response;
    },
    (error: AxiosError) => {
      // Centralized error handling:
      // Manage general status codes and log or handle errors as needed
      console.error("Error from API:", error.response?.status, error.message);

      return Promise.reject({
        status: error.response?.status,
        message: error.message,
        data: error.response?.data,
      });
    }
  );

  return {
    get: <T = any>(url: string, params?: {}) =>
      axiosInstance.get<T>(url, { params }),
    post: <T = any>(url: string, data?: {}) => axiosInstance.post<T>(url, data),
    put: <T = any>(url: string, data?: {}) => axiosInstance.put<T>(url, data),
    patch: <T = any>(url: string, data?: {}) =>
      axiosInstance.patch<T>(url, data),
    remove: <T = any>(url: string, params?: {}) =>
      axiosInstance.delete<T>(url, { params }),
  };
};
