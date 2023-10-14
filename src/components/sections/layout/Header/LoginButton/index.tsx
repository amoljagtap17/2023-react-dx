"use client";

import { Button } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginButton() {
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log("session::", { session, status });

  return status === "authenticated" ? (
    <Button color="inherit" onClick={() => signOut()}>
      Logout
    </Button>
  ) : (
    <Button color="inherit" onClick={() => router.push("/login")}>
      Login
    </Button>
  );
}
