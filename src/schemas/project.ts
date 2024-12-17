import { z } from "zod";

export const formProjectSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "O nome deve ter no mínimo 3 caracteres." })
      .max(60, { message: "O nome deve ter no máximo 60 caracteres." }),
    initialDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message:
        "A data de início deve ser uma data válida no formato YYYY-MM-DD.",
    }),
    endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message:
        "A data de término deve ser uma data válida no formato YYYY-MM-DD.",
    }),
    description: z
      .string()
      .min(10, { message: "A descrição deve ter no mínimo 10 caracteres." })
      .max(500, { message: "A descrição deve ter no máximo 500 caracteres." }),
    owner: z
      .string()
      .min(3, { message: "O responsável deve ter no mínimo 3 caracteres." })
      .max(50, { message: "O responsável deve ter no máximo 50 caracteres." }),
  })
  .refine(
    (data) => new Date(data.initialDate) <= new Date(data.endDate || ""),
    {
      message: "A data de término deve ser posterior à data de início.",
      path: ["endDate"],
    },
  );

export type ProjectData = z.infer<typeof formProjectSchema>;
