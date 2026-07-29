"use client";

import { PanelRightClose, PanelRightOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SidebarFooter from "./SidebarFooter";

const navigationLinks = [
  { name: "Me", href: "/me" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Stack", href: "/stack" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openSidebarClass =
    "absolute top-0 right-0 z-50 h-screen translate-x-0 duration-300 ease-in-out md:static";
  const closedSidebarClass =
    "absolute top-0 right-0 z-50 h-screen translate-x-full duration-300 ease-in-out md:static";

  return (
    <aside
      className={`flex w-full max-w-60 flex-col gap-5 space-y-5 border-l bg-background p-8 md:translate-x-0 ${
        isOpen ? openSidebarClass : closedSidebarClass
      }`}
    >
      <div className="relative">
        <Link href="/me" className="m-0 font-playfair text-xl font-bold">
          Jeran🙈
        </Link>
        <button
          className="absolute top-1 -left-20 cursor-pointer rounded-md bg-background p-0.5 text-muted-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <PanelRightClose className="h-5 w-5" />
          ) : (
            <PanelRightOpen className="h-5 w-5" />
          )}
        </button>
      </div>
      <nav className="m-0 flex-1">
        <ul className="flex flex-col gap-2">
          {navigationLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-sm hover:text-muted-foreground ${pathname === item.href ? "font-bold" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <SidebarFooter />
    </aside>
  );
}
