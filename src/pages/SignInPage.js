import React from "react";

import { LoadingButton } from "@mui/lab";
import { Container, Stack, Typography } from "@mui/material";

import FormProvider from "../components/hook-form/FormProvider";
import TextFieldCustom from "../components/hook-form/TextFieldCustom";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const SignInPage = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  })

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="xs" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100vh' }}>
      <Stack sx={{mb: 2}}>
        <Typography variant="h5" sx={{textTransform: 'uppercase'}}>Login</Typography>
      </Stack>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{mb: 3}}>
          <TextFieldCustom name="email" label="Email Address" />
          <TextFieldCustom name="password" label="Password" type='password' />
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
      </FormProvider>
    </Container>
  );
};

export default SignInPage;
