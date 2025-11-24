import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const industries = [
  {
    name: "Banks & NBFCs",
    description: "Collections, mandates, and partner settlement rails with compliance-grade controls.",
    useCases: ["EMI collections", "Auto-debit recovery", "Partner payouts", "Cashflow visibility"]
  },
  {
    name: "Utilities",
    description: "Bill presentment, payment reminders, and reconciliation for electricity, water, and gas.",
    useCases: ["BBPS integration", "Virtual accounts", "Ledger exports", "Payment reminders"]
  },
  {
    name: "Telecom",
    description: "High-volume prepaid and postpaid flows with smart routing and real-time settlement.",
    useCases: ["Recharge flows", "Invoice collections", "Reconciliation", "Chargeback management"]
  },
  {
    name: "Insurance",
    description: "Policy renewals and premium collections with mandate automation and proactive alerts.",
    useCases: ["AutoPay setup", "Policy renewal", "Failure retries", "Customer notifications"]
  },
  {
    name: "Government",
    description: "Citizen service payments, duty collections, and welfare disbursements with accountability.",
    useCases: ["Department portals", "Treasury settlement", "Audit logs", "Service SLAs"]
  },
  {
    name: "E-commerce",
    description: "Marketplace payments with split settlement, COD reconciliation, and refunds orchestration.",
    useCases: ["Split payouts", "COD reconciliation", "Wallet flows", "Refund automation"]
  }
];

export default function IndustriesPage() {
  return (
    <section className="section bg-gray-50">
      <div className="container-base">
        <SectionHeading
          title="Industries we power"
          subtitle="Purpose-built for regulated, high-scale industries that need reliability."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.name}>
              <CardHeader>
                <CardTitle>{industry.name}</CardTitle>
                <CardDescription>{industry.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-secondary">Use cases</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  {industry.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
