import MobileNav from "@/components/shared/Account/MobileNav";
import TabDeskNav from "@/components/shared/Account/TabDeskNav";
import SignOutButton from "@/components/shared/SignOutButton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Calendar,
  Gamepad2,
  LayoutDashboard,
  PanelLeft,
  Settings,
  Users2,
} from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        {/* Left Aside : Tablette and Desktop */}
        <TabDeskNav />

        {/* Toggle Menu : Only Mobile ?  */}
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <MobileNav />

          {/* Main */}
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 xl:grid-cols-3">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
