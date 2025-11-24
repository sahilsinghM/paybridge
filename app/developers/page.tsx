import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tabData = {
  rest: {
    title: "REST APIs",
    description: "Versioned endpoints for collections, payouts, and mandates with idempotency and audit trails.",
    sample: `POST /v1/collections\n{\n  "customer": {"id": "cust_001"},\n  "amount": 125000,\n  "reference": "INV-2045",\n  "callback_url": "https://merchant.com/webhooks"\n}`
  },
  webhooks: {
    title: "Webhooks",
    description: "Event delivery with signing secrets, retries, and replay protection.",
    sample: `event: collection.settled\n{\n  "id": "evt_003",\n  "data": {"collection_id": "col_123", "status": "settled"},\n  "sent_at": "2024-09-01T10:00:00Z"\n}`
  },
  kits: {
    title: "Integration Kits",
    description: "SDKs, sample apps, and observability dashboards for rapid pilots.",
    sample: `import { PayBridge } from "@paybridge/sdk";\nconst client = new PayBridge({ apiKey: process.env.PB_KEY });\nawait client.mandates.create({ mandateRef: "SUB-9821", amount: 45000 });`
  }
};

export default function DevelopersPage() {
  return (
    <section className="section">
      <div className="container-base space-y-10">
        <SectionHeading
          title="Built for developers"
          subtitle="Consistent APIs, sandboxes, and observability to ship reliable payment experiences."
        />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-gray-700">
            Access BBPS, mandates, gateway routing, and reconciliation APIs with a single developer experience.
          </p>
          <Button size="lg">Get API Keys</Button>
        </div>
        <Tabs defaultValue="rest" className="w-full">
          <TabsList>
            <TabsTrigger value="rest">REST APIs</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="kits">Integration Kits</TabsTrigger>
          </TabsList>
          {Object.entries(tabData).map(([key, value]) => (
            <TabsContent key={key} value={key}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-secondary">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
                <Card>
                  <CardContent className="whitespace-pre-wrap bg-secondary text-white font-mono text-sm leading-relaxed">
                    {value.sample}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
