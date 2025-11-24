import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  className?: string;
}

export function TestimonialCard({ quote, name, role, company, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        className
      )}
    >
      <p className="text-lg font-semibold text-secondary">“{quote}”</p>
      <div className="mt-4 text-sm text-gray-600">
        <div className="font-semibold text-secondary">{name}</div>
        <div>{role}</div>
        <div className="text-gray-500">{company}</div>
      </div>
    </div>
  );
}
