"use client";

import { DynamicForm } from "@/lib/components";
import { Container } from "@mui/material";
import { signIn } from "next-auth/react";
import * as yup from "yup";

const formConfig = {
  email: {
    type: "email" as "email",
    label: "Email Address",
    validation: yup.string().email().required(),
  },
  password: {
    type: "password" as "password",
    label: "Password",
    validation: yup.string().min(6).required(),
  },
};

const formDefaultValues = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const onSubmit = (data: any) => {
    const { email, password } = data;

    signIn("credentials", { email, password });
  };

  return (
    <Container maxWidth="lg">
      <DynamicForm
        formConfig={formConfig}
        onSubmit={onSubmit}
        defaultValues={formDefaultValues}
      />
    </Container>
  );
}
