"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { FormProvider, useController, useForm } from "react-hook-form";
import * as yup from "yup";

interface IBaseFieldProps {
  label?: string;
  validation?: any;
  disabled?: boolean;
}

interface ITextFieldProps extends IBaseFieldProps {
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
}

interface ICheckboxProps extends IBaseFieldProps {
  type: "checkbox";
}

type IFormField = ITextFieldProps | ICheckboxProps;

interface IFormConfig {
  [key: string]: IFormField;
}

interface IDynamicFormProps {
  formConfig: IFormConfig;
  onSubmit: (data: any) => void;
  defaultValues?: { [key: string]: any };
}

export function DynamicForm({
  formConfig,
  onSubmit,
  defaultValues = {},
}: IDynamicFormProps) {
  const validationSchema = Object.keys(formConfig).reduce((schema, key) => {
    schema[key] = formConfig[key].validation || yup.string().required();

    return schema;
  }, {} as any);

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(yup.object().shape(validationSchema)),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {Object.keys(formConfig).map((key) => {
            const fieldConfig = formConfig[key];
            const { field, fieldState } = useController({
              name: key,
              control: methods.control,
            });

            switch (fieldConfig.type) {
              case "text":
              case "number":
              case "email":
              case "password":
                return (
                  <Grid item xs={12} key={key}>
                    <TextField
                      {...field}
                      type={fieldConfig.type}
                      label={fieldConfig.label}
                      placeholder={fieldConfig.placeholder}
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      disabled={fieldConfig.disabled}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                );

              case "checkbox":
                return (
                  <Grid item xs={12} key={key}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value}
                          disabled={fieldConfig.disabled}
                        />
                      }
                      label={fieldConfig.label}
                    />
                  </Grid>
                );
            }

            return null;
          })}

          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}
