import { LayoutDashboard, Settings } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

import { Brand } from "@/components/common/Brand";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Settings", to: "/dashboard", icon: Settings },
];

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Brand />
          <ThemeToggle />
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl md:grid-cols-[220px_1fr]">
        <aside className="border-b border-border p-3 md:min-h-[calc(100vh-65px)] md:border-b-0 md:border-r">
          <nav className="flex gap-2 md:flex-col">
            {navItems.map(({ label, to, icon: Icon }) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                    isActive && "bg-muted text-foreground",
                  )
                }
                key={label}
                to={to}
              >
                <Icon className="size-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
