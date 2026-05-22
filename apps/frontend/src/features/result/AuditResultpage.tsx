import { useState } from "react";
import {
  TrendingDown,
  CheckCircle2,
  Share2,
  ArrowUpRight,
  Sparkles,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// --- STRUCTURAL TYPING ---
interface ToolRecommendation {
  toolId: string;
  toolName: string;
  currentSpend: number;
  recommendedAction: string;
  savings: number;
  reason: string;
}

interface AuditResultData {
  teamSize: number;
  useCase: string;
  totalCurrentSpend: number;
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  recommendations: ToolRecommendation[];
  // If the AI API succeeds, pass the generated string. If null or failed, the component gracefully falls back.
  aiGeneratedSummary: string | null;
}

// --- STATIC DEMO DATA MATCHING YOUR ARCHITECTURE ---
// Change this mock constant to test the different paths (<$100 vs >$500)
const MOCK_AUDIT_DATA: AuditResultData = {
  teamSize: 12,
  useCase: "coding_agents",
  totalCurrentSpend: 1450,
  totalMonthlySavings: 580, // High Savings Path (> $500)
  totalAnnualSavings: 6960,
  aiGeneratedSummary:
    "Your engineering stack shows significant compounding overlapping redundancy. Running 8 independent Cursor Pro accounts alongside a generic Claude Team tier creates direct seat-overhead waste. By consolidating seat licensing down to dedicated Anthropic API endpoints routed through an internal proxy model, your startup can sustain identical token throughout while stripping $580 cleanly off your operational baseline monthly gross margin.",
  recommendations: [
    {
      toolId: "cursor",
      toolName: "Cursor",
      currentSpend: 320,
      recommendedAction: "Downsize to 4 core seats + API key fallback",
      savings: 160,
      reason:
        "Mid-level engineers can transition to direct API configuration keys to mitigate structural user-licensing creep.",
    },
    {
      toolId: "claude",
      toolName: "Claude (Anthropic UI)",
      currentSpend: 600,
      recommendedAction: "Consolidate Team tier to API Direct proxy",
      savings: 300,
      reason:
        "Your primary use case is programmatic extraction, which can be completed cheaper via pure system tokens.",
    },
    {
      toolId: "openai_api",
      toolName: "OpenAI API Direct",
      currentSpend: 530,
      recommendedAction: "Implement structured caching layers",
      savings: 120,
      reason:
        "Repetitive developer context pipelines are missing prompt-caching headers, generating redundant token billing.",
    },
  ],
};

export default function AuditResultsPage() {
  const [copied, setCopied] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const data = MOCK_AUDIT_DATA; // Plug in live routing states here

  const isHighSavings = data.totalMonthlySavings >= 500;
  const isOptimal = data.totalMonthlySavings < 100;

  // Fallback engine if Anthropic API direct connection drops/fails
  const fallbackSummary = `Your AI stack context across ${data.teamSize} seats has been structurally cross-referenced. The stack is operating at an aggregated efficiency threshold of ${(((data.totalCurrentSpend - data.totalMonthlySavings) / data.totalCurrentSpend) * 100).toFixed(0)}%. Consolidating mismatched premium subscription tiers down into structured token caching pipelines and unified developer proxies represents the clean optimization path forward to capture immediate margins.`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-background text-foreground selection:bg-primary/20 mx-auto min-h-screen max-w-5xl space-y-8 p-4 font-sans antialiased sm:p-6 md:p-12">
      {/* HEADER CONTROLS ACTIONS */}
      <div className="border-border/60 flex flex-col items-start justify-between gap-4 border-b pb-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-primary font-mono text-xs font-semibold tracking-wider uppercase">
            System State // Report Finalized
          </p>
          <h1 className="text-2xl font-bold tracking-tight">AI Stack Infrastructure Audit</h1>
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <Button
            onClick={handleCopyLink}
            variant="outline"
            className="h-10 w-full gap-2 text-xs font-semibold sm:w-auto"
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
            {copied ? "Link Copied!" : "Copy Share Link"}
          </Button>
          <Button className="bg-primary text-primary-foreground h-10 w-full gap-2 text-xs font-bold sm:w-auto">
            <Share2 size={14} /> Share to X
          </Button>
        </div>
      </div>

      {/* HERO SECTION: TOTAL METRIC SAVINGS TRACKER */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card
          className={`relative overflow-hidden border transition-all md:col-span-2 ${isOptimal ? "border-border bg-card" : "border-primary/20 from-card to-primary/[0.02] bg-gradient-to-br"}`}
        >
          <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl" />
          <CardContent className="flex h-full min-h-[180px] flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="text-muted-foreground font-mono text-xs font-bold tracking-wider uppercase">
                Identified Runway Optimization
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-foreground font-mono text-5xl font-extrabold tracking-tight sm:text-6xl">
                  ${data.totalMonthlySavings}
                </span>
                <span className="text-muted-foreground text-xl font-medium">/ month</span>
              </div>
            </div>
            <div className="mt-6 flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-500">
              <TrendingDown size={16} /> Secure up to ${data.totalAnnualSavings.toLocaleString()} in
              absolute annualized runway
            </div>
          </CardContent>
        </Card>

        {/* CONDITION STATE A: HONEST INSIGHT CARD FOR OPTIMIZED STACKS (<$100/mo) */}
        {isOptimal && (
          <Card className="flex flex-col justify-between border-emerald-500/20 bg-emerald-500/[0.02] p-6">
            <div className="space-y-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 size={18} />
              </div>
              <h3 className="text-base font-bold tracking-tight">
                You’re spending exceptionally well
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                No manufactured savings here. Your deployment scales dynamically alongside seat
                metrics without redundancy or systemic markup waste. Keep operations as they stand.
              </p>
            </div>

            <div className="border-border/60 mt-4 border-t pt-4">
              {emailSubmitted ? (
                <p className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                  <ShieldCheck size={14} /> Monitoring active.
                </p>
              ) : (
                <div className="space-y-2">
                  <p className="text-muted-foreground text-[11px] font-medium">
                    Notify me when new pricing optimization patterns apply:
                  </p>
                  <div className="flex gap-1.5">
                    <Input
                      placeholder="Engineering Email"
                      type="email"
                      className="bg-background h-8 text-xs"
                    />
                    <Button
                      onClick={() => setEmailSubmitted(true)}
                      size="sm"
                      className="h-8 px-2.5 text-[11px]"
                    >
                      Track
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        )}

        {/* CONDITION STATE B: CREDEX UPSALE WIDGET FOR HIGH WASTE (>=$500/mo) */}
        {isHighSavings && (
          <Card className="border-primary bg-primary/5 shadow-primary/5 relative flex flex-col justify-between overflow-hidden p-6 shadow-lg">
            <div className="bg-primary/20 pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full blur-2xl" />
            <div className="space-y-3">
              <div className="bg-primary text-primary-foreground inline-flex items-center gap-1 rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                Partner Protocol
              </div>
              <h3 className="text-lg font-extrabold tracking-tight">
                Capture This Capital via Credex
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Don’t leave this margin on the table. **Credex** automates subscription arbitrage
                and routes corporate allocations through direct bulk-cleared channels, instantly
                harvesting your **${data.totalMonthlySavings}/mo** gap.
              </p>
            </div>
            <Button className="bg-foreground text-background hover:bg-foreground/90 mt-4 h-10 w-full gap-1.5 text-xs font-bold shadow-md">
              Deploy Credex Arbitrage <ArrowUpRight size={14} />
            </Button>
          </Card>
        )}

        {/* FALLBACK INFO: NEUTRAL RETAINER */}
        {!isHighSavings && !isOptimal && (
          <Card className="border-border bg-card flex flex-col justify-center p-6 text-center">
            <p className="text-muted-foreground font-mono text-xs">Current Baseline Footprint</p>
            <p className="mt-1 text-2xl font-bold tracking-tight">
              ${data.totalCurrentSpend}/mo Gross
            </p>
            <p className="text-muted-foreground mx-auto mt-2 max-w-xs text-xs">
              Minor adjustments recommended below to optimize architectural resource efficiency.
            </p>
          </Card>
        )}
      </div>

      {/* FEATURE 4: AI GENERATED PERSONALIZED SUMMARY */}
      <Card className="border-border bg-muted/20 relative">
        <CardContent className="space-y-3 p-5 sm:p-6">
          <div className="text-primary flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase">
            <Sparkles size={14} className="animate-pulse" /> Deep Inference Summary (Anthropic API
            Engine)
          </div>
          <p className="text-foreground/90 font-sans text-sm leading-relaxed font-normal">
            {data.aiGeneratedSummary ? data.aiGeneratedSummary : fallbackSummary}
          </p>
        </CardContent>
      </Card>

      {/* PER-TOOL OPTIMIZATION BREAKDOWN MATRIX */}
      <div className="space-y-3">
        <div className="flex flex-col">
          <h2 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
            Per-Tool Breakdown & Vectors
          </h2>
          <p className="text-muted-foreground text-[11px]">
            Granular view of your runtime configurations vs automated target adjustments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {data.recommendations.map((rec) => (
            <div
              key={rec.toolId}
              className="bg-card border-border/80 hover:border-border grid grid-cols-1 items-center gap-4 rounded-xl border p-4 shadow-sm transition-all sm:p-5 md:grid-cols-12"
            >
              {/* Tool Identification column */}
              <div className="md:col-span-3">
                <span className="text-muted-foreground block font-mono text-xs font-bold tracking-tight uppercase">
                  System Tool
                </span>
                <span className="text-foreground mt-0.5 block text-base font-bold tracking-tight">
                  {rec.toolName}
                </span>
              </div>

              {/* Baseline Cost allocation column */}
              <div className="md:col-span-2">
                <span className="text-muted-foreground block font-mono text-xs font-bold tracking-tight uppercase">
                  Current Spend
                </span>
                <span className="text-foreground mt-0.5 block font-mono text-sm font-semibold">
                  ${rec.currentSpend}/mo
                </span>
              </div>

              {/* Structural Operational Recommendation Directive */}
              <div className="md:col-span-3">
                <span className="text-muted-foreground block font-mono text-xs font-bold tracking-tight uppercase">
                  Recommended Action
                </span>
                <span className="text-primary bg-primary/5 border-primary/10 mt-1 block w-fit rounded border px-2 py-1 text-xs font-semibold">
                  {rec.recommendedAction}
                </span>
              </div>

              {/* Direct Immediate Yield Matrix Savings */}
              <div className="md:col-span-2">
                <span className="text-muted-foreground block font-mono text-xs font-bold tracking-tight uppercase">
                  Monthly Savings
                </span>
                <span
                  className={`mt-0.5 block font-mono text-sm font-bold ${rec.savings > 0 ? "text-emerald-500" : "text-muted-foreground"}`}
                >
                  {rec.savings > 0 ? `-$${rec.savings}` : "$0"}
                </span>
              </div>

              {/* Architectural Logical Validation Rule */}
              <div className="md:col-span-2">
                <span className="text-muted-foreground block font-mono text-xs font-bold tracking-tight uppercase">
                  Rationalized Assessment
                </span>
                <p
                  className="text-muted-foreground mt-0.5 line-clamp-2 text-xs leading-snug md:line-clamp-none"
                  title={rec.reason}
                >
                  {rec.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
