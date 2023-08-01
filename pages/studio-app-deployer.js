import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"

export default function Studio() {
  return (
    <PublicLayout>
      <HeroCustom 
        overline="STUDIO"
        title="Deploy and Launch your Web3 apps"
        desc="in minutes with almost zero cost on multiple chains"
        />
    </PublicLayout>
  )
}
