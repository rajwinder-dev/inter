import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2, ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { auditSchema, type AuditFormValues } from "@repo/schemas";
import { TOOL_TIERS, SUPPORTED_TOOLS } from "@repo/constants";

export default function AIAuditFormPage() {
  const onSubmit = (data: AuditFormValues) => {};
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuditFormValues>({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      teamSize: 1,
      useCase: "",
      tools: [{ toolId: "", tier: "", seats: 1, monthlySpend: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  const watchedTools = watch("tools");

  return (
    <div className="bg-background text-foreground flex min-h-screen items-center justify-center p-4 font-sans antialiased sm:p-6 md:p-12">
      <Card className="border-border bg-card relative w-full max-w-3xl overflow-hidden shadow-2xl">
        {/* Subtle Background Glow Layer for Developer Aesthetics */}
        <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full blur-3xl" />

        <CardHeader className="border-border/60 border-b pb-6">
          <div className="text-primary mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={12} /> Optimization Protocol
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
            Audit Your Startup AI Spend Matrix
          </CardTitle>
          <CardDescription className="text-muted-foreground max-w-xl text-sm">
            Input active pipeline licenses and API direct infrastructure configurations to identify
            margins ready for architectural optimization.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-8 pt-6">
            {/* Meta Context Configuration Row */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-muted-foreground/90 text-xs font-bold tracking-wider uppercase">
                  Global Organization Size
                </label>
                <Input
                  type="number"
                  min="1"
                  placeholder="e.g. 15"
                  {...register("teamSize")}
                  className="bg-background border-border focus-visible:ring-primary h-11"
                />
                {errors.teamSize && (
                  <p className="text-destructive mt-1 font-mono text-[11px]">
                    {errors.teamSize.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-muted-foreground/90 text-xs font-bold tracking-wider uppercase">
                  Primary Code / Automation Objective
                </label>
                <select
                  {...register("useCase")}
                  className="border-border bg-background text-foreground focus:ring-primary h-11 w-full rounded-md border px-3 py-2 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                >
                  <option value="" disabled>
                    Choose core application profile...
                  </option>
                  <option value="coding_agents">Autonomous Engineering & Software Agents</option>
                  <option value="data_extraction">
                    Production Extraction & Document Ingestion
                  </option>
                  <option value="customer_ops">Automated Live Customer Support Systems</option>
                  <option value="internal_workflows">
                    Internal R&D Copilots / Strategic Drafting
                  </option>
                </select>
                {errors.useCase && (
                  <p className="text-destructive mt-1 font-mono text-[11px]">
                    {errors.useCase.message}
                  </p>
                )}
              </div>
            </div>

            {/* Dynamic System Allocation Fields */}
            <div className="border-border/40 space-y-4 border-t pt-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                    Infrastructure & Software Subscriptions
                  </h3>
                  <p className="text-muted-foreground mt-0.5 text-[11px]">
                    Add rows for each vendor account profile currently billed.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-primary/20 text-primary hover:bg-primary/5 h-9 gap-1.5 font-semibold transition-colors"
                  onClick={() => append({ toolId: "", tier: "", seats: 1, monthlySpend: 0 })}
                >
                  <Plus size={14} /> Add System Tool
                </Button>
              </div>

              {errors.tools?.message && (
                <p className="text-destructive bg-destructive/5 border-destructive/10 rounded-md border p-3 font-mono text-xs">
                  {errors.tools.message}
                </p>
              )}

              <div className="space-y-3">
                {fields.map((field, index) => {
                  const currentSelectedTool = watchedTools?.[index]?.toolId;
                  const availableTiers = currentSelectedTool ? TOOL_TIERS[currentSelectedTool] : [];

                  return (
                    <div
                      key={field.id}
                      className="bg-muted/20 border-border/80 group hover:border-border relative grid grid-cols-1 items-end gap-3 rounded-xl border p-4 transition-all md:grid-cols-12"
                    >
                      {/* Infrastructure Vendor Picker */}
                      <div className="space-y-1.5 md:col-span-3">
                        <label className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                          Engine Vendor
                        </label>
                        <select
                          {...register(`tools.${index}.toolId` as const)}
                          className="border-border bg-background text-foreground focus:ring-primary h-10 w-full rounded-md border px-2.5 py-1.5 text-xs focus:ring-1 focus:outline-none"
                        >
                          <option value="">Select Vendor...</option>
                          {SUPPORTED_TOOLS.map((t) => (
                            <option key={t.id} value={t.id}>
                              {t.name}
                            </option>
                          ))}
                        </select>
                        {errors.tools?.[index]?.toolId && (
                          <p className="text-destructive font-mono text-[10px]">
                            {errors.tools[index]?.toolId?.message}
                          </p>
                        )}
                      </div>

                      {/* Tier Choice Dropdown Dependent on Selection */}
                      <div className="space-y-1.5 md:col-span-3">
                        <label className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                          Plan Tier
                        </label>
                        <select
                          disabled={!currentSelectedTool}
                          {...register(`tools.${index}.tier` as const)}
                          className="border-border bg-background text-foreground focus:ring-primary h-10 w-full rounded-md border px-2.5 py-1.5 text-xs focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select Plan...</option>
                          {availableTiers?.map((tierName) => (
                            <option key={tierName} value={tierName}>
                              {tierName}
                            </option>
                          ))}
                        </select>
                        {errors.tools?.[index]?.tier && (
                          <p className="text-destructive font-mono text-[10px]">
                            {errors.tools[index]?.tier?.message}
                          </p>
                        )}
                      </div>

                      {/* Allocated Seats Count input */}
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                          Seats
                        </label>
                        <Input
                          type="number"
                          min="1"
                          {...register(`tools.${index}.seats` as const)}
                          className="bg-background border-border h-10 text-xs"
                        />
                        {errors.tools?.[index]?.seats && (
                          <p className="text-destructive font-mono text-[10px]">
                            {errors.tools[index]?.seats?.message}
                          </p>
                        )}
                      </div>

                      {/* Cumulative Vendor Spend Input */}
                      <div className="space-y-1.5 md:col-span-3">
                        <label className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                          Monthly Gross Billing ($)
                        </label>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0.00"
                          {...register(`tools.${index}.monthlySpend` as const)}
                          className="bg-background border-border h-10 font-mono text-xs"
                        />
                        {errors.tools?.[index]?.monthlySpend && (
                          <p className="text-destructive font-mono text-[10px]">
                            {errors.tools[index]?.monthlySpend?.message}
                          </p>
                        )}
                      </div>

                      {/* Row Destruction Component Option */}
                      <div className="flex justify-center pb-0.5 md:col-span-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          disabled={fields.length === 1}
                          className="text-muted-foreground hover:text-destructive h-10 w-10 rounded-lg disabled:opacity-30"
                          onClick={() => remove(index)}
                        >
                          <Trash2 size={15} />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>

          <CardFooter className="bg-muted/30 border-border/80 flex justify-end border-t p-6">
            <Button
              type="submit"
              size="lg"
              className="shadow-primary/10 w-full gap-2 px-8 font-bold shadow-xl transition-all hover:opacity-95 sm:w-auto"
            >
              Analyze Stack Footprint <ArrowRight size={16} />
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
