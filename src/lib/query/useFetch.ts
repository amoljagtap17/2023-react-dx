import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface IUseFetchArgs {
  url: string;
  params?: {};
}

const queryFunction = async <T = any>({ url, params }: IUseFetchArgs) => {
  const { data } = await api.get<T>(url, params);

  return data;
};

export const useFetch = <T = any>({ url, params }: IUseFetchArgs) => {
  return useQuery<T>({
    queryKey: [url, params],
    queryFn: () => queryFunction<T>({ url, params }),
  });
};
