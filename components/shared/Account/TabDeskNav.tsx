import {
  AreaChart,
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
    icon: <Gamepad2 />,
    label: "Onglet Experiences",
    tooltip: "Expériences",
  },
  {
    href: "/account/opening/",
    icon: <Calendar />,
    label: "Onglet Ouverture",
    tooltip: "Ouverture",
  },
  {
    href: "/account/reservations/",
    icon: <Users2 />,
    label: "Onglet Réservations",
    tooltip: "Réservations",
  },
  {
    href: "/account/insights/",
    icon: <AreaChart />,
    label: "Onglet Comptabilité",
    tooltip: "Comptabilité",
  },
  {
    href: "#",
    icon: <Settings />,
    label: "Settings",
    tooltip: "Settings",
  },
];

const TabDeskNav = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <span className="group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full bg-white text-lg font-semibold text-black  md:size-8 md:text-base">
          <LayoutDashboard className="size-4" />
          <span className="sr-only">Dashboard Logo</span>
        </span>
        {navItems.slice(0, 4).map((item, index) => (
          <TabDeskNavItem key={index} {...item} />
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TabDeskNavItem {...navItems[4]} />
      </nav>
    </aside>
  );
};

export default TabDeskNav;
