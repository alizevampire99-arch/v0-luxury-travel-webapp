import { Hero } from "@/components/home/hero"
import { AgencySection } from "@/components/home/agency-section"
import { DestinationsPreview } from "@/components/home/destinations-preview"
import { AiTeaser } from "@/components/home/ai-teaser"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AgencySection />
      <DestinationsPreview />
      <AiTeaser />
    </>
  )
}
