import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function Theme() {
  const { setTheme, theme } = useTheme();

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 text-sm" suppressHydrationWarning>
      <div className="flex w-fit rounded-full border p-0.5">
        <button
          className={`rounded-full p-1 ${theme === "light" && "bg-muted"}`}
          title="Light"
          onClick={() => setTheme("light")}
        >
          <Sun strokeWidth={0.5} className="h-4 w-4" />
        </button>
        <button
          className={`rounded-full p-1 ${theme === "dark" ? "bg-muted" : ""}`}
          title="Dark"
          onClick={() => setTheme("dark")}
        >
          <Moon strokeWidth={0.5} className="h-4 w-4" />
        </button>
        <button
          className={`rounded-full p-1 ${theme === "system" && "bg-muted"}`}
          title="System"
          onClick={() => setTheme("system")}
        >
          <Monitor strokeWidth={0.5} className="h-4 w-4" />
        </button>
      </div>
      <p className="text-muted-foreground">Mode</p>
    </div>
  );
}
