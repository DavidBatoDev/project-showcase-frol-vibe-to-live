import type { Metadata } from 'next';
import { CosmicShootingStars } from "@/components/landing/CosmicShootingStars";
import { TopNav } from "@/components/nav/TopNav";
import { ShowcaseGrid } from "@/components/showcase/ShowcaseGrid";

export const metadata: Metadata = {
  title: 'Community Showcase · From Vibe to Live',
  description: 'Projects built by the AWS Cloud Club PUP Manila community.',
};

export default function ShowcasePage() {
  return (
    <main
      className="cosmic-bg relative grid min-h-screen w-full place-items-center"
      style={{ overflow: 'clip' }}
    >
      <div className="cosmic-stars" aria-hidden="true" />
      <CosmicShootingStars />
      <span
        className="cosmic-planet cosmic-float cosmic-planet-md"
        aria-hidden="true"
        style={{ top: '12%', left: '4%' }}
      />
      <span
        className="cosmic-planet cosmic-float cosmic-planet-sm"
        aria-hidden="true"
        style={{ top: '60%', right: '6%', animationDelay: '1.5s', opacity: 0.5 }}
      />
      <div className="cosmic-horizon" aria-hidden="true" />
      <TopNav active="showcase" />

      <div
        className="relative z-10 mx-auto w-full max-w-7xl"
        style={{ padding: '120px 24px 80px' }}
      >
        <ShowcaseGrid />
      </div>
    </main>
  );
}
