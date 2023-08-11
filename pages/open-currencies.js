import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"
import { HeroMain } from "../components/HeroMain"

// Listing currencies for free

export default function OpenCurr() {
  return (
    <PublicLayout>
      <HeroMain 
        overline="Embrace Diverse Currencies"
        title="Discover a World of Open Token Currencies"
        desc="Unlock a World of Possibilities with Our Multifaceted Currency Options. Seamlessly Transact and Expand Your Global Reach, Empowering Your Business's Success."
        image="/pages/contracts-hero-1.png"
        />
    </PublicLayout>
  )
}
