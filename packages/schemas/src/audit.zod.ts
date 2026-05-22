import z from "zod";

export const auditSchema = z.object({
  teamSize: z.coerce.number().min(1, "Team size must be at least 1 seat"),
  useCase: z.string().min(1, "Primary development use case required"),
  tools: z
    .array(
      z.object({
        toolId: z.string().min(1, "Please select an infrastructure tool"),
        tier: z.string().min(1, "Please select a plan tier"),
        seats: z.coerce.number().min(1, "Must assign at least 1 seat"),
        monthlySpend: z.coerce.number().min(0, "Monthly spend cannot be less than 0"),
      }),
    )
    .min(1, "Include at least one stack tool to audit"),
});

export type AuditFormValues = z.infer<typeof auditSchema>;
