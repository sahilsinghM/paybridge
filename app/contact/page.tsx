import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-base space-y-10">
        <SectionHeading
          title="Talk to our team"
          subtitle="Share your use case and we will design a rollout plan for your collections and reconciliation stack."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact form</CardTitle>
              <CardDescription>We typically respond within one business day.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="Head of Payments" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" placeholder="Tell us about your payments and reconciliation needs" />
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                Submit inquiry
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales</CardTitle>
                <CardDescription>Design pilots and commercial options.</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>sales@paybridge.com</p>
                <p>+91 98765 00001</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
                <CardDescription>For live merchants and integration queries.</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>support@paybridge.com</p>
                <p>+91 98765 00002</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office & Map</CardTitle>
                <CardDescription>Find us at our headquarters.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 w-full rounded-lg border border-dashed border-gray-300 bg-gray-50" />
                <p className="mt-3 text-sm text-gray-600">Map placeholder for HQ location</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
