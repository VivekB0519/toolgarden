import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="container flex flex-col items-center gap-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your garden of{" "}
          <span className="text-primary">AI productivity tools</span>
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground">
          ToolGarden is a calm space where helpful AI tools grow in one place, so you can pick exactly what you need to get things done.
        </p>
        <div className="flex gap-4">
          <Link href="/signup">
            <Button size="lg">Get started</Button>
          </Link>
          <Link href="/tools">
            <Button size="lg" variant="outline">Browse tools</Button>
          </Link>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">Why ToolGarden?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Pick what you need</CardTitle>
              <CardDescription>Organized tools in one place—no more hunting through random AI apps.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI that supports your work</CardTitle>
              <CardDescription>From blogs to emails to ideas, each tool is tuned to real tasks.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Simple for everyone</CardTitle>
              <CardDescription>Clean, friendly UI so even non‑technical users feel at home.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}