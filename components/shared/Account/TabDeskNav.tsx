import {
  Calendar,
  Gamepad2,
  LayoutDashboard,
  Settings,
  Users2,
} from "lucide-react";
import TabDeskNavItem from "./TabDeskNavItem";

const navItems = [
  {
    href: "/account/experiences/",
    icon: <Gamepad2 className="size-5" />,
    label: "Onglet Experiences",
    tooltip: "Expériences",
    className: "bg-accent text-foreground",
  },
  {
    href: "/account/opening/",
    icon: <Calendar className="size-5" />,
    label: "Onglet Ouverture",
    tooltip: "Ouverture",
    className: "text-muted-foreground",
  },
  {
    href: "/account/reservations/",
    icon: <Users2 className="size-5" />,
    label: "Onglet Réservations",
    tooltip: "Réservations",
    className: "text-muted-foreground",
  },
  {
    href: "#",
    icon: <Settings className="size-5" />,
    label: "Settings",
    tooltip: "Settings",
    className: "text-muted-foreground",
  },
];

const TabDeskNav = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <span className="group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:size-8 md:text-base">
          <LayoutDashboard className="size-4" />
          <span className="sr-only">Dashboard Logo</span>
        </span>
        {navItems.slice(0, 3).map((item, index) => (
          <TabDeskNavItem key={index} {...item} />
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TabDeskNavItem {...navItems[3]} />
      </nav>
    </aside>
  );
};

export default TabDeskNav;
