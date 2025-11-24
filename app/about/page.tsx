import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const timeline = [
  { year: "2020", event: "PayBridge founded to simplify bill collections for utilities." },
  { year: "2021", event: "Launched mandate engine with first bank partners." },
  { year: "2022", event: "Expanded to reconciliation and settlement automation." },
  { year: "2023", event: "Scaled to telecom and insurance ecosystems across India." }
];

const leaders = [
  { name: "Aarav Mehta", role: "Co-founder & CEO" },
  { name: "Nidhi Rao", role: "Co-founder & CTO" },
  { name: "Kabir Shah", role: "Head of Product" },
  { name: "Sana Kulkarni", role: "Head of Risk & Compliance" }
];

export default function AboutPage() {
  return (
    <section className="section bg-gray-50">
      <div className="container-base space-y-12">
        <SectionHeading
          title="About PayBridge"
          subtitle="We are building the connective tissue for payments, mandates, and reconciled data across India."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our story</CardTitle>
              <CardDescription>
                PayBridge was created by payments practitioners who saw the fragmentation between gateways, bank rails, and
                finance operations. We built an infrastructure-first stack to make collections predictable, auditable, and fast.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Today, we partner with banks, billers, and platforms to deliver resilient payment experiences. From mandates to
                reconciliation, our mission is to give finance and engineering teams the tools to launch with confidence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
              <CardDescription>Milestones on our journey to modernize payments infrastructure.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-4">
                  <div className="text-lg font-semibold text-primary">{item.year}</div>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <SectionHeading title="Leadership" subtitle="Operators who have built payments at scale." />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {leaders.map((leader) => (
              <Card key={leader.name}>
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-semibold">
                    {leader.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <CardTitle>{leader.name}</CardTitle>
                  <CardDescription>{leader.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
