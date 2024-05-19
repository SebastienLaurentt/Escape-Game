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
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <span className="group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:size-8 md:text-base">
              <LayoutDashboard className="size-4" />
              <span className="sr-only">Dashboard Logo</span>
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/account/experiences/"
                    className="flex size-9 items-center justify-center rounded-lg bg-accent text-foreground transition-colors hover:text-foreground md:size-8"
                  >
                    <Gamepad2 className="size-5" />
                    <span className="sr-only">Onglet Experiences</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Expériences</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/account/opening/"
                    className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
                  >
                    <Calendar className="size-5" />
                    <span className="sr-only">Onglet Ouverture</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Ouverture</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/account/reservations/"
                    className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
                  >
                    <Users2 className="size-5" />
                    <span className="sr-only">Onglet Réservations</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Réservations</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
                  >
                    <Settings className="size-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>

        {/* Toggle Menu : Only Mobile ?  */}
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="size-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="group flex size-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <LayoutDashboard className="size-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Dashboard Logo</span>
                  </Link>
                  <Link
                    href="/account/experiences/"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <Gamepad2 className="size-5" />
                    Expériences
                  </Link>
                  <Link
                    href="/account/opening/"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Calendar className="size-5" />
                    Ouverture
                  </Link>
                  <Link
                    href="/account/reservations/"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="size-5" />
                    Réservations
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <div className="ml-auto">
              <SignOutButton />
            </div>
          </header>

          {/* Main */}
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 xl:grid-cols-3">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
