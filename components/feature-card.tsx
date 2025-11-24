import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  items?: string[];
}

export function FeatureCard({ icon, title, description, items }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {items && (
        <CardContent className="space-y-2">
          <ul className="space-y-2 text-sm text-gray-600">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
