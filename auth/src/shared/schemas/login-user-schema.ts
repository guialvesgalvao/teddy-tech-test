import { z } from "zod";

export const LoginUserSchema = z.object({
  name: z.string({
    required_error: "Seu nome é obrigatório!",
  }),

  password: z.string({
    required_error: "Senha é obrigatória!",
  }),
});

export type LoginUserSchemaType = z.infer<typeof LoginUserSchema>;
