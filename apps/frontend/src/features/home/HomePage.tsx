import {
  Terminal,
  ExternalLink,
  ShieldCheck,
  Zap,
  TrendingDown,
  Layers,
  HelpCircle,
  ArrowRight,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router";
import { ProjectLogo } from "./ProjectLogo";

const DeveloperLandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-foreground min-h-screen font-sans antialiased">
      {/* --- Navigation --- */}
      <nav className="border-border bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <ProjectLogo />

          <div className="flex items-center gap-3">
            <a href="https://github.com/rajwinder-dev/ticket-flow" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="sm" className="hidden gap-2 sm:flex">
                <HugeiconsIcon icon={Github} size={20} />
                <span>GitHub</span>
              </Button>
            </a>

            <Button
              size="sm"
              className="bg-primary text-primary-foreground shadow-primary/10 px-5 font-semibold shadow-lg hover:opacity-90"
              onClick={() => navigate("/org")}
            >
              Run Free Audit <ExternalLink size={14} className="ml-1" />
            </Button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="container mx-auto flex flex-col items-center px-6 py-20 text-center lg:py-32">
        <Badge
          variant="outline"
          className="border-destructive/30 text-destructive bg-destructive/5 mb-6 animate-pulse px-4 py-1 font-mono"
        >
          Stop Overpaying for LLMs & Infrastructure
        </Badge>
        <h1 className="font-heading mb-8 max-w-4xl text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
          The Mint for startup <br />
          <span className="text-primary font-serif italic">AI tool spend.</span>
        </h1>
        <p className="text-muted-foreground mb-10 max-w-[650px] text-lg leading-relaxed md:text-xl">
          Most startups have no benchmark for their AI billing. Connect your stack securely, map
          your true token usage, and surface cheaper open-source alternatives in 60 seconds.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={() => navigate("/org")}
            className="shadow-primary/20 h-14 rounded-xl px-10 text-lg font-bold shadow-2xl transition-all hover:-translate-y-0.5"
          >
            Audit Your AI Stack Free
          </Button>
          <a href="#how-it-works">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted/50 h-14 rounded-xl px-10 text-lg"
            >
              See How It Works
            </Button>
          </a>
        </div>
      </section>

      {/* --- Value Prop / Product Thinking --- */}
      <section id="how-it-works" className="border-border container mx-auto border-t px-6 py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              You are likely bleeding cash on <span className="text-primary">unoptimized APIs</span>
              .
            </h2>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Founders and engineering managers rarely have time to second-guess token efficiencies
              or discover better baseline infrastructure. This tool evaluates your active pipelines
              and exposes exactly where your vendor margins are bloated.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 text-primary mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-bold">Trace Cost Anomaly</h4>
                  <p className="text-muted-foreground text-sm">
                    Incorporate lightweight token mapping to discover which internal prompts or
                    unoptimized loops are draining your daily run rate.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 text-primary mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-bold">Alternative Sourcing Engine</h4>
                  <p className="text-muted-foreground text-sm">
                    Instantly cross-reference models against identical output benchmarks using
                    open-source architectures hosted on dedicated hardware.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 text-primary mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-bold">Credex Optimization Path</h4>
                  <p className="text-muted-foreground text-sm">
                    For teams with major optimization footprints, securely dispatch a migration
                    pipeline directly into a streamlined, high-efficiency Credex cluster.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Live Auditor Component Mockup */}
          <div className="group relative">
            <div className="from-primary/20 absolute -inset-1 rounded-2xl bg-gradient-to-r to-transparent opacity-40 blur transition duration-1000 group-hover:opacity-70"></div>
            <Card className="bg-card border-border relative overflow-hidden shadow-2xl">
              <div className="bg-muted/50 border-border flex items-center justify-between border-b px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="bg-destructive/40 h-3 w-3 rounded-full"></div>
                    <div className="bg-warning/40 h-3 w-3 rounded-full"></div>
                    <div className="bg-success/40 h-3 w-3 rounded-full"></div>
                  </div>
                  <div className="text-muted-foreground ml-2 font-mono text-[10px]">
                    credex-auditor --live-analysis
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="text-destructive border-destructive/20 bg-destructive/5 font-mono text-[10px] font-normal"
                >
                  Leakage Detected
                </Badge>
              </div>
              <CardContent className="space-y-4 p-6">
                <div className="bg-background border-border flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <Activity size={16} className="text-primary animate-pulse" />
                    <div>
                      <p className="text-xs font-bold">Wrapper API Base Consumption</p>
                      <p className="text-muted-foreground text-[10px]">
                        Target endpoints: gpt-4o-structured
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-destructive font-mono text-xs font-bold">$3,420/mo</p>
                    <p className="text-muted-foreground text-[9px]">Est. Current Run-rate</p>
                  </div>
                </div>

                <div className="bg-muted/20 border-border space-y-1 rounded-lg border border-dashed p-4 font-mono text-[12px] leading-relaxed">
                  <div>
                    <span className="text-primary font-bold">Audit Recommendation:</span>{" "}
                    Open-Source Llama-3-70B Refactor
                  </div>
                  <div>
                    <span className="text-success font-bold">Identical Precision:</span> 98.4% match
                    on evaluation datasets
                  </div>
                  <div>
                    <span className="text-success font-bold">Projected Net Savings:</span> Save
                    ~$2,150 every single month
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground flex w-full items-center justify-center gap-1 text-xs font-bold hover:opacity-90"
                  onClick={() => navigate("/org")}
                >
                  Deploy Alternative Vector via Credex <ArrowRight size={12} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- Feature Grid --- */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Core Capabilities
          </h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-sm">
            Zero-friction integrations built specifically for technical decision-makers who need
            immediate clarity over vendor stacks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature: Spend Benchmarking */}
          <Card className="bg-card border-border hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <TrendingDown size={24} />
              </div>
              <CardTitle className="font-heading text-xl">Granular Spend Audits</CardTitle>
              <CardDescription>
                Expose deep hidden infrastructure premiums. Compare line-item metrics against highly
                optimized baselines instantly.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature: Open Source Alternatives */}
          <Card className="bg-card border-border hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Layers size={24} />
              </div>
              <CardTitle className="font-heading text-xl">OSS Alternative Mapping</CardTitle>
              <CardDescription>
                Discover which private models can be swapped safely for self-hosted or open weights
                equivalents with identical reliability.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature: Non-Invasive Isolation */}
          <Card className="bg-card border-border hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <CardTitle className="font-heading text-xl">Enterprise Grade RBAC</CardTitle>
              <CardDescription>
                Define strict profile restrictions. Run your analysis safely with complete read-only
                keys and credential sandboxing.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature: Dynamic API Splicing */}
          <Card className="bg-card border-border hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Zap size={24} />
              </div>
              <CardTitle className="font-heading text-xl">Latency & Load Profiles</CardTitle>
              <CardDescription>
                Map downstream query behavior to predict if localized alternative clustering
                improves throughput speed alongside cost.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature: Organization Mapping */}
          <Card className="bg-card border-border hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <HelpCircle size={24} />
              </div>
              <CardTitle className="font-heading text-xl">B2B Team Intelligence</CardTitle>
              <CardDescription>
                Segment analysis parameters across product verticals, sub-startups, or internal
                testing environments inside a unified space.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Feature: Continuous Logging */}
          <Card className="bg-card border-border hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Terminal size={24} />
              </div>
              <CardTitle className="font-heading text-xl">Continuous Cost Tracking</CardTitle>
              <CardDescription>
                Transition standard static audits into custom dynamic dashboards to flag prompt
                bloat before it hits your balance sheet.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* --- Open Source Section --- */}
      <section id="oss" className="bg-muted/30 border-border border-y py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <Terminal size={48} className="text-primary mx-auto mb-6" />
          <h2 className="font-heading mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Open Architecture Core
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Transparency matters when analyzing architecture metrics. TicketFlow is built completely
            in the open — audit our scanning strategies, customize the weighting rules, or self-host
            your own spend profiling system.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/rajwinder-dev/ticket-flow" target="_blank" rel="noreferrer">
              <Button variant="secondary" className="border-primary/10 font-bold">
                Contribute on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* --- Bottom CTA (Lead Gen Layer for Credex) --- */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="bg-primary text-primary-foreground shadow-3xl shadow-primary/20 rounded-[2.5rem] px-6 py-16">
          <h2 className="font-heading mb-6 text-4xl font-bold tracking-tight italic md:text-5xl">
            Uncover your missing margin today.
          </h2>
          <p className="text-primary-foreground/80 mx-auto mb-10 max-w-xl text-lg">
            Stop guessing your true infrastructure alternatives. Run a secure, completely free audit
            and pinpoint exact strategies to scale your product lines with Credex.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-foreground h-14 px-10 text-lg font-bold shadow-xl transition-all hover:opacity-95"
              onClick={() => navigate("/org")}
            >
              Generate Free Audit Profile
            </Button>
          </div>
        </div>
      </section>

      {/* --- Simple Footer --- */}
      <footer className="border-border container mx-auto flex flex-col items-center justify-between gap-6 border-t px-6 py-12 md:flex-row">
        <div className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} TicketFlow × Credex Core. Genuinely built for engineering
          leadership.
        </div>
        <div className="text-muted-foreground flex gap-8 text-sm font-semibold">
          <a
            href="https://github.com/rajwinder-dev/ticket-flow"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rajwinder-web"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default DeveloperLandingPage;
