import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const solutions = [
  {
    title: "Bill Payments & Collections",
    description: "Omni-channel bill presentment with intelligent reminders and auto-reconciliation.",
    features: ["e-NACH & UPI AutoPay", "Multi-bank BBPS rails", "Automated reminders", "Virtual accounts"],
    diagram: ["Customer", "PayBridge", "Banks", "Finance Ops"]
  },
  {
    title: "Payment Gateway",
    description: "Enterprise-grade gateway with smart routing, retries, and tokenization.",
    features: ["Gateway failover", "UPI & cards", "Token vault", "Risk scoring"],
    diagram: ["Checkout", "Gateway Mesh", "Issuer", "Ledger"]
  },
  {
    title: "Recurring Mandates",
    description: "Lifecycle automation for recurring collections with proactive mandate health checks.",
    features: ["UPI/NACH mandates", "Auto retries", "Lifecycle alerts", "Customer notifications"],
    diagram: ["Customer", "Mandate Engine", "Sponsor Bank", "Settlement"]
  },
  {
    title: "Reconciliation & Settlement",
    description: "Automated matching across acquirers and banks with break detection and GL exports.",
    features: ["Intraday ledgering", "Break detection", "Custom exports", "Settlement timelines"],
    diagram: ["Receipts", "Matcher", "Rules", "ERP"]
  }
];

function Diagram({ nodes }: { nodes: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {nodes.map((node, idx) => (
        <div
          key={node}
          className="flex items-center gap-2 rounded-lg border border-dashed border-primary/40 bg-primary/5 px-3 py-2 text-xs font-medium text-secondary"
        >
          <span className="text-primary">{idx + 1}.</span> {node}
        </div>
      ))}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <section className="section">
      <div className="container-base space-y-12">
        <SectionHeading
          title="Payments infrastructure built for billers"
          subtitle="Modular capabilities to power collections, mandates, gateway performance, and reconciliation."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {solutions.map((solution) => (
            <Card key={solution.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-secondary">Key features</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {solution.features.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-secondary">Architecture (schematic)</p>
                  <Diagram nodes={solution.diagram} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
