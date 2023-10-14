"use client";

import { CircularProgress } from "@/components/lib";
import { Box } from "@mui/material";
import { ComponentType } from "react";
import { useFetch } from "./useFetch";

export const withFetch =
  (url: string, params?: {}) => (Component: ComponentType) => {
    return (props: any) => {
      const { data, isFetching, isError, error } = useFetch({ url, params });

      if (isFetching)
        return (
          <Box
            display="flex"
            minHeight="10vh"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        );

      if (isError) return <p>Error: {(error as Error)?.message}</p>;

      return <Component {...props} data={data} />;
    };
  };
