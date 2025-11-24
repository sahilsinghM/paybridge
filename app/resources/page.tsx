import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FAQAccordion } from "@/components/faq-accordion";
import Link from "next/link";

const blogPosts = [
  {
    title: "Scaling bill collections across multiple banks",
    description: "Design considerations when routing BBPS and mandate flows for national utilities.",
    tag: "Infrastructure"
  },
  {
    title: "Why reconciliation is a product, not an afterthought",
    description: "How automated matching reduces finance ops load and improves partner trust.",
    tag: "Reconciliation"
  },
  {
    title: "Building resilient payment gateways",
    description: "Approaches to retries, tokenization, and observability for enterprise payments.",
    tag: "Gateway"
  }
];

const faqItems = [
  {
    question: "Do you provide a sandbox?",
    answer: "Yes, every merchant receives a dedicated sandbox with test bank issuers, mock webhooks, and sample data."
  },
  {
    question: "How quickly can we go live?",
    answer: "Typical pilots start in 2 weeks with phased rollout. Compliance and bank certifications are supported by our team."
  },
  {
    question: "What compliance standards do you support?",
    answer: "We align with ISO 27001 controls, PCI DSS expectations for card flows, and data residency requirements."
  }
];

export default function ResourcesPage() {
  return (
    <section className="section">
      <div className="container-base space-y-12">
        <SectionHeading title="Resources" subtitle="Learn how PayBridge powers regulated payment flows." />

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title}>
              <CardHeader>
                <span className="text-xs font-semibold uppercase text-primary">{post.tag}</span>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="#" className="text-sm font-semibold text-primary">
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <SectionHeading title="FAQs" subtitle="Quick answers for teams evaluating PayBridge." />
            <FAQAccordion items={faqItems} />
          </div>
          <div className="space-y-4">
            <SectionHeading title="Documentation" subtitle="Get started with integration playbooks." />
            <div className="space-y-3">
              {[
                "Integration quickstart",
                "API reference",
                "Webhooks guide",
                "Operational playbooks"
              ].map((doc) => (
                <div
                  key={doc}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary"
                >
                  {doc}
                  <Link href="#" className="text-primary">
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
