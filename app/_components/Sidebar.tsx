import Link from "next/link";

const navigation = [
  { name: "Me", href: "/me" },
  { name: "Projects", href: "/projects" },
  { name: "Stack", href: "/stack" },
  { name: "Experience", href: "/experience" },
];

export default function Sidebar() {
  return (
    <aside className="border-l p-5 space-y-5 max-w-50 w-full flex flex-col gap-5">
      <h1 className="font-bold text-xl font-playfair m-0">Jeran</h1>
      <nav className="flex-1 m-0">
        <ul className="flex flex-col gap-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-primary text-sm">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer>
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Jeran. All rights reserved.
        </p>
      </footer>
    </aside>
  );
}
