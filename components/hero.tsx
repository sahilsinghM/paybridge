import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="section bg-gradient-to-b from-primary/5 to-white">
      <div className="container-base grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Infrastructure-first payments platform
          </div>
          <h1 className="text-4xl font-bold leading-tight text-secondary sm:text-5xl">
            {title}
          </h1>
          <p className="subtext max-w-2xl">{subtitle}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="w-full sm:w-auto" size="lg">
              {primaryCta}
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" size="lg">
              {secondaryCta}
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:max-w-lg">
            {[
              { label: "Uptime", value: "99.99%" },
              { label: "Transactions/yr", value: "5B+" },
              { label: "Integrations", value: "350+" },
              { label: "Partners", value: "120+" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-gray-200 bg-white p-4 text-left shadow-sm"
              >
                <div className="text-2xl font-semibold text-secondary">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Settlement status</p>
              <p className="text-3xl font-semibold text-secondary">Real-time</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              PB
            </div>
          </div>
          <div className="mt-8 space-y-4">
            {[
              { title: "Mandates", value: "Active", color: "bg-green-100 text-green-700" },
              { title: "Gateway", value: "Optimized", color: "bg-blue-100 text-primary" },
              { title: "Reconciliation", value: "Automated", color: "bg-slate-100 text-secondary" }
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-lg border border-gray-100 p-4"
              >
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="text-base font-semibold text-secondary">{item.value}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${item.color}`}>
                  Live
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
