'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  tooltip: string;
}

const TabDeskNavItem = ({ href, icon, label, tooltip }: NavItemProps) => {
  const pathname = usePathname();
  
  // Normalize paths to remove trailing slashes for comparison
  const normalizePath = (path: string) => path.replace(/\/$/, '');
  const isActive = normalizePath(pathname) === normalizePath(href);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={`flex size-5 items-center justify-center rounded-lg transition-colors hover:text-primary md:size-8 ${
              isActive ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {icon}
            <span className="sr-only">{label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TabDeskNavItem;
