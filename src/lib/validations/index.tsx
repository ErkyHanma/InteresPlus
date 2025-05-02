import * as z from "zod";

export const CalculatorValidation = z.object({
  password: z.string().min(8, { message: "At least 8 characters requiered" }),
  DepósitoInicial: z.number(),
  TasaDeInterésAnual: z.number(),
  AñosAInvertir: z.number(),
  FrecuenciaAnualDeInterés: z.any(),
  AportacionesAdicionales: z.number(),
});

export const ContactFormSchema = z.object({
  nombre: z.string().min(2).max(50),
  correo: z.string().min(2).max(50),
  descripcion: z.string().max(200),
});
