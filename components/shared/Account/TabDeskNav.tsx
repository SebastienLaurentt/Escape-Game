import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Calendar, Gamepad2, LayoutDashboard, Settings, Users2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TabDeskNav = () => {
  return (
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
  )
}

export default TabDeskNav