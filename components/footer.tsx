import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="container-base grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xl font-bold text-primary">
            <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">PB</span>
            PayBridge
          </div>
          <p className="text-sm text-gray-600">
            Infra-first payments stack powering collections, payouts, and reconciliation for modern enterprises.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-secondary">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/developers">Developers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-secondary">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-secondary">Compliance</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>ISO 27001-ready</li>
            <li>PCI DSS aligned</li>
            <li>Data residency controls</li>
          </ul>
        </div>
      </div>
      <div className="container-base mt-8 flex flex-col gap-2 border-t border-gray-100 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} PayBridge. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Status</Link>
        </div>
      </div>
    </footer>
  );
}
