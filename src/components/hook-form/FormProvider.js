import { FormProvider as Form } from "react-hook-form";

export default function FormProvider({ children, onSubmit, methods, sx }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} style={{width: '100%'}}>{children}</form>
    </Form>
  );
}
