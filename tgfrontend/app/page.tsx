import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <section className="container flex max-w-4xl flex-col items-center gap-8 text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your garden of{" "}
          <span className="text-primary">AI productivity tools</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          ToolGarden is a calm space where helpful AI tools grow in one place,
          so you can pick exactly what you need to get things done.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* buttons */}
        </div>
      </section>

      <section className="container flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="container">
        
          <h2 className="mb-8 text-center text-2xl font-semibold">Why ToolGarden?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="h-full shadow-sm">
              <CardHeader>
                <CardTitle>Pick what you need</CardTitle>
                <CardDescription>Organized tools in one place—no more hunting through random AI apps.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="h-full shadow-sm">
              <CardHeader>
                <CardTitle>AI that supports your work</CardTitle>
                <CardDescription>From blogs to emails to ideas, each tool is tuned to real tasks.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="h-full shadow-sm">
              <CardHeader>
                <CardTitle>Simple for everyone</CardTitle>
                <CardDescription>Clean, friendly UI so even non‑technical users feel at home.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}