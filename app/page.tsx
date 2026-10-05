import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold">HaloKirana DS</h1>
      <p className="text-muted">Tema HeroUI HaloKirana sudah aktif.</p>
      <div className="flex items-center gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </main>
  );
}
