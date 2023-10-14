import { useMutation } from "@tanstack/react-query";
import { api } from "../api";

export type IMethod = "POST" | "PATCH" | "DELETE";

interface IUseMutateArgs {
  url: string;
  method: IMethod;
}

const postFunction = async <T = any>(url: string, body: {}) => {
  const { data } = await api.post<T>(url, body);

  return data;
};

const patchFunction = async <T = any>(url: string, body: {}) => {
  const { data } = await api.patch<T>(url, body);

  return data;
};

const deleteFunction = async <T = any>(url: string, params?: {}) => {
  const { data } = await api.remove<T>(url, params);

  return data;
};

export const useMutate = <T = any>(config: IUseMutateArgs) => {
  const mutationFn = async (bodyOrParams?: any) => {
    switch (config.method) {
      case "POST":
        return await postFunction<T>(config.url, bodyOrParams);
      case "PATCH":
        return await patchFunction<T>(config.url, bodyOrParams);
      case "DELETE":
        return await deleteFunction<T>(config.url, bodyOrParams);
      default:
        throw new Error("Invalid method");
    }
  };

  return useMutation<T>({
    mutationFn,
  });
};
