import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { StatCard } from "@/components/stat-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CreditCard, Network, RefreshCw, Clock3, Layers } from "lucide-react";

const stats = [
  { label: "Annual throughput", value: "$15B+" },
  { label: "Avg. collection improvement", value: "28%" },
  { label: "Mandate success", value: "98%" },
  { label: "Banking partners", value: "40+" }
];

const whoWeServe = [
  "Banks & NBFCs",
  "Utilities & Government",
  "Telecom & Broadband",
  "Insurance Providers",
  "EdTech & Subscriptions",
  "E-commerce & Marketplaces"
];

const features = [
  {
    title: "Unified payments orchestration",
    description: "Route collections across gateways, UPI, and mandates with SLA-backed reliability.",
    icon: <Network className="h-6 w-6" />
  },
  {
    title: "Real-time reconciliation",
    description: "Automate settlement matching with enriched references and multi-bank coverage.",
    icon: <RefreshCw className="h-6 w-6" />
  },
  {
    title: "Regulatory-grade security",
    description: "Encryption, audit trails, and risk controls aligned with enterprise governance.",
    icon: <ShieldCheck className="h-6 w-6" />
  },
  {
    title: "Recurring mandates",
    description: "NACH/UPI mandates with adaptive retries and lifecycle alerts for subscriptions.",
    icon: <Clock3 className="h-6 w-6" />
  },
  {
    title: "Gateway optimization",
    description: "Smart routing, retries, and tokenization to maximize success across payment rails.",
    icon: <CreditCard className="h-6 w-6" />
  },
  {
    title: "Developer-first toolkit",
    description: "SDKs, sandboxes, and observability hooks built for rapid enterprise rollouts.",
    icon: <Layers className="h-6 w-6" />
  }
];

const testimonials = [
  {
    quote: "PayBridge helped us consolidate bill collections across states with predictable uptime.",
    name: "Anaya S.",
    role: "Head of Digital Channels",
    company: "National Utility Co."
  },
  {
    quote: "Their reconciliation engine cut our T+N delays and improved partner confidence.",
    name: "Rohan P.",
    role: "VP Finance",
    company: "Telecom Operator"
  },
  {
    quote: "We launched recurring mandates in weeks with clear observability out of the box.",
    name: "Meera K.",
    role: "Product Lead",
    company: "Insurance Platform"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Powering Digital Payments & Bill Collections at Scale"
        subtitle="PayBridge is the infrastructure-first platform for mission-critical collections, mandates, and reconciliation across India’s leading banks, billers, and digital ecosystems."
        primaryCta="Talk to Sales"
        secondaryCta="Merchant Login"
      />

      <section className="section">
        <div className="container-base grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-base">
          <SectionHeading
            title="Who we serve"
            subtitle="Purpose-built for regulated enterprises handling high-volume collections and payouts."
          />
          <div className="card-grid">
            {whoWeServe.map((item) => (
              <Card key={item}>
                <CardContent className="flex h-full items-center justify-between p-6">
                  <div className="text-lg font-semibold text-secondary">{item}</div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Learn more</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base">
          <SectionHeading
            title="Why PayBridge"
            subtitle="Modern rails, reconciled data, and enterprise controls in one platform."
          />
          <div className="card-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-base space-y-6">
          <SectionHeading
            title="What our customers say"
            subtitle="Reliable infrastructure that scales with regulated institutions."
          />
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex gap-4 overflow-x-auto px-6 py-6 snap-x snap-mandatory">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  {...testimonial}
                  className="min-w-[280px] max-w-sm snap-start"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base">
          <SectionHeading title="Trusted by industry leaders" subtitle="Placeholder partner showcase" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="flex h-16 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 text-gray-500"
              >
                Logo {idx + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container-base flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl font-semibold">Ready to modernize your collections stack?</h3>
            <p className="mt-2 text-primary/20 text-sm sm:text-base text-white/80">
              Talk to our solution architects to craft a rollout for your enterprise.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Talk to Sales
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View Docs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
