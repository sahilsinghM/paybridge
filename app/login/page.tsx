"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  const handleLogin = async () => {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.success) {
      alert('Login successful');
    } else {
      alert(data.message);
    }
  };

  return (
    <section className="section bg-gray-50">
      <div className="container-base flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 text-center">
            <CardTitle>Merchant Login</CardTitle>
            <CardDescription>Access your PayBridge dashboard.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between text-sm text-primary">
              <Link href="#">Forgot password?</Link>
              <Link href="#">Need access?</Link>
            </div>
            <Button className="w-full" size="lg" onClick={handleLogin}>
              Login
            </Button>
            <p className="text-center text-xs text-gray-500">
              By logging in you agree to the PayBridge terms and privacy policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
