import { z } from "zod";

export const createCarValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    color: z.string(),
    isElectric: z.boolean(),
    status: z.enum(["available", "unavailable"]).optional(),
    features: z.array(z.string()),
    pricePerHour: z.number(),
    isDeleted: z.boolean().optional(),
  }),
});
export const updateCarValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    color: z.string().optional(),
    isElectric: z.boolean().optional(),
    status: z.enum(["available", "unavailable"]).optional(),
    features: z.array(z.string()).optional(),
    pricePerHour: z.number().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const CarValidation = {
  createCarValidationSchema,
  updateCarValidationSchema,
};
