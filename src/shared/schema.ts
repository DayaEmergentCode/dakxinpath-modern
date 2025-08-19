import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["grains", "fruits", "vegetables", "spices"]),
  description: z.string(),
  price: z.number(),
  unit: z.string(),
  origin: z.string(),
  image: z.string(),
  badge: z.string(),
  inStock: z.boolean(),
  specifications: z
    .object({
      moisture: z.string().optional(),
      purity: z.string().optional(),
      shelfLife: z.string().optional(),
      packaging: z.string().optional(),
      certifications: z.array(z.string()).optional(),
    })
    .optional(),
  nutritionalInfo: z
    .object({
      calories: z.string().optional(),
      protein: z.string().optional(),
      carbohydrates: z.string().optional(),
      fiber: z.string().optional(),
    })
    .optional(),
});

export type Product = z.infer<typeof productSchema>;

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  products: z.string().min(1, "Please select a product category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
