import { object, coerce, string } from "zod";

const EnvSchema = object({
  PORT: coerce.number().default(8001),
  PUBLIC_DIR: string(),
});

export const env = EnvSchema.parse(process.env);