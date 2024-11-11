import {
  LoginUserSchema,
  LoginUserSchemaType,
} from "@/shared/schemas/login-user-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

import { FieldGroup } from "@/components/utilities/field-group";

interface ILoginUserFormProps {
  onSubmit: (data: LoginUserSchemaType) => void;
}

export function LoginUserForm(props: Readonly<ILoginUserFormProps>) {
  const { onSubmit } = props;

  const form = useForm<LoginUserSchemaType>({
    resolver: zodResolver(LoginUserSchema),
  });

  const { control, reset, handleSubmit } = form;

  function handleNavigateRegister() {
    reset();
    //   navigate(RoutesEnum.REGISTER);
  }

  function handleNavigateForgotPassword() {
    reset();
    //   navigate(RoutesEnum.FORGOT_PASSWORD);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
        <FieldGroup>
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-wrap  flex-col items-start  justify-between gap-2">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      type="name"
                      name={field.name}
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                      placeholder="Digite o seu nome"
                    />
                  </FormControl>
                  <div className="flex items-start text-red-600">
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <FormLabel>Senha</FormLabel>
                  <button
                    type="button"
                    className="text-xs underline font-medium bg-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    onClick={handleNavigateForgotPassword}
                  >
                    Esqueceu a senha?
                  </button>
                </div>
                <FormControl>
                  <Input
                    type="password"
                    name={field.name}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    disabled={field.disabled}
                    placeholder="Digite a sua senha"
                    autoComplete="password"
                  />
                </FormControl>
                <div className="flex items-start text-red-600">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </FieldGroup>

        <div className="flex flex-col gap-2 mt-4">
          <Button
            id="login-button"
            type="submit"
            className="text-white"
            style={{ backgroundColor: "#ec6724", color: "#fff" }}
          >
            Entrar
          </Button>
          <Button variant="outline" onClick={handleNavigateRegister}>
            Criar nova conta
          </Button>
        </div>
      </form>
    </Form>
  );
}
