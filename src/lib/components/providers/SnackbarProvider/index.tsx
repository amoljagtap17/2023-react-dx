"use client";

import { SnackbarProvider as NotiSnackbarProvider } from "notistack";
import { ReactNode } from "react";

export function SnackbarProvider({ children }: { children: ReactNode }) {
  return (
    <NotiSnackbarProvider
      maxSnack={3}
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      {children}
    </NotiSnackbarProvider>
  );
}
