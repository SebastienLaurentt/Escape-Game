import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  AreaChart,
  Calendar,
  CircleDollarSign,
  Gamepad2,
  LayoutDashboard,
  PanelLeft,
  Users2,
} from "lucide-react";
import Link from "next/link";
import SignOutButton from "../SignOutButton";

export default async function MobileNav() {
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="sm:hidden">
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
            <Link
              href="/account/prices/"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <CircleDollarSign  className="size-5" />
              Tarifs
            </Link>
            <Link
              href="/account/insights/"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <AreaChart className="size-5" />
              Comptabilité
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="ml-auto space-x-2">
        {isAuth && (
          <Button
            asChild
            aria-label="Retourner sur le site de la Villa de l'Effroi"
            variant="tertiary"
          >
            <Link href="/">Retour Site</Link>
          </Button>
        )}
        <SignOutButton />
      </div>
    </header>
  );
}
