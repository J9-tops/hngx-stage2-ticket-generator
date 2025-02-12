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
  emailSchema: z
    .string()
    .regex(EMAIL_REGEX, "Email must be in the format: name@provider.com"),
  profilePicture: z
    .instanceof(File)
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      "File must be less than 5MB",
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Only PNG, JPG, or PDF files are allowed",
    ),
  request: z.string().optional(),
});
