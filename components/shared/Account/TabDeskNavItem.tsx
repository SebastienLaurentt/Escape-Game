import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  tooltip: string;
}

const TabDeskNavItem = ({
  href,
  icon,
  label,
  tooltip,
}: NavItemProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`flex size-5 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8`}
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
