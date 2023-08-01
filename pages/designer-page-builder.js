import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"

export default function Designer() {
  return (
    <PublicLayout>
      <HeroCustom
        overline="DESIGNER"
        title="Create, Customize and Monetize Skins"
        desc="in minutes by designing user interfaces for any industry"
        />
    </PublicLayout>
  )
}
