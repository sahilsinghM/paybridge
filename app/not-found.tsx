import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-base flex flex-col items-center gap-8 text-center">
        <Card className="max-w-2xl shadow-sm">
          <CardContent className="space-y-4 py-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
            <h1 className="text-3xl font-semibold text-secondary">Page not found</h1>
            <p className="text-gray-600">
              We couldn&apos;t find the page you were looking for. Check the URL or return to the homepage for
              PayBridge solutions, industries, and developer resources.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/">Back to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
