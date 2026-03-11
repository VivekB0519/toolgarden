import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          🌱 ToolGarden
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/tools">
            <Button variant="ghost" size="sm">Tools</Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}