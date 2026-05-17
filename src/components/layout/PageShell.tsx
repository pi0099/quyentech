import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SpacePageBackground } from "@/components/effects/space/SpaceAtmosphere";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacePageBackground />
      <Navbar />
      <main className="relative min-h-screen z-0">{children}</main>
      <Footer />
    </>
  );
}
