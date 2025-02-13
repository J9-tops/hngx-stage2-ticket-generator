import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg", "application/pdf"];
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/;

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .refine(
      (value) => value.trim().split(" ").length >= 2,
      "Please enter your full name",
    ),
  email: z
    .string()
    .regex(EMAIL_REGEX, "Please follow this format: name@provider.com"),
  profilePicture: z.union([
    z
      .instanceof(File, { message: "Please upload a valid file" })
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: "File must be less than 5MB",
      })
      .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
        message: "Only PNG, JPG, or PDF files are allowed",
      }),
    z.string().url(),
  ]),
  request: z.string().optional(),
});

export type FormType = z.infer<typeof formSchema> & {
  profilePicture: File | undefined;
};
