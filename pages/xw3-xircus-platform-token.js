import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"

export default function Home() {
  return (
    <PublicLayout>
      <HeroCustom 
        overline="XW3"
        title="Xircus Platform Utility Token"
        desc="Unlimited Rewards, Pension and Deflationary by Utility"
        />      
    </PublicLayout>
  )
}
