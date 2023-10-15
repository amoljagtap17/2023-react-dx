import { ComponentType } from "react";
import { IMethod, useMutate } from "./useMutate";

export const withMutate =
  (url: string, method: IMethod) => (Component: ComponentType<any>) => {
    return (props: any) => {
      const mutationResult = useMutate({
        url,
        method,
      });

      const extendedProps = {
        ...props,
        ...mutationResult,
      };

      return <Component {...extendedProps} />;
    };
  };
