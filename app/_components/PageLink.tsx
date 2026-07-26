import { ChevronRight } from "lucide-react";
import Link from "next/link";

type PageLinkProps = {
  href: string;
  label: string;
};

export default function PageLink({ href, label }: PageLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-end font-manrope hover:underline hover:text-muted-foreground lowercase"
    >
      {label}
      <ChevronRight className="w-4 h-4" />
    </Link>
  );
}
