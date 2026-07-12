import { Outlet } from "react-router-dom";

import { Brand } from "@/components/common/Brand";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function AuthLayout() {
  return (
    <main className="min-h-screen bg-muted/30 px-4 py-6 sm:px-6">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
        <Brand />
        <ThemeToggle />
      </header>
      <section className="mx-auto flex min-h-[calc(100vh-112px)] max-w-md items-center justify-center">
        <Outlet />
      </section>
    </main>
  );
}
