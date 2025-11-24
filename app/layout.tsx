import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "PayBridge | Digital Payments Infrastructure",
  description: "Infra-first payments platform for large-scale bill collections, mandates, and reconciliation.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-secondary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
