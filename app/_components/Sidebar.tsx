"use client";

import { PanelRightClose, PanelRightOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      className={`bg-background flex w-full max-w-50 flex-col gap-5 space-y-5 border-l p-8 md:translate-x-0 ${
        isOpen ? openSidebarClass : closedSidebarClass
      }`}
    >
      <div className="relative">
        <Link href="/me" className="font-playfair m-0 text-xl font-bold">
          Jeran🙈
        </Link>
        <button
          className="bg-background text-muted-foreground absolute top-1 -left-20 cursor-pointer rounded-md p-0.5 md:hidden"
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
                className={`hover:text-muted-foreground text-sm ${pathname === item.href ? "font-bold" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer>
        <p className="text-muted-foreground text-sm">
          &copy; 2026 Jeran. All rights reserved.
        </p>
      </footer>
    </aside>
  );
}
