import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  tooltip: string;
  className: string;
}

const TabDeskNavItem = ({ href, icon, label, tooltip, className }: NavItemProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`flex size-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:size-8 ${className}`}
        >
          {icon}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{tooltip}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default TabDeskNavItem;