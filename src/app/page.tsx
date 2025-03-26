import { redis } from "@/lib/redis";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";

export default async function Home() {
  const requests = await redis.get("served-requests");

  return (
    <div className="bg-blue-50 grainy-light">
      <Hero requestsCount={requests!} />
      <ProblemSection />
      <SolutionSection />
    </div>
  );
}
