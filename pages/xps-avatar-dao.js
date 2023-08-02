import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"

// Complimentary Products
// Alternative Payment Currency for deployed Apps
// Pension
// Features
// Staking Rewards
// Tier Levels
// Tokenomics
// 

export default function Punks() {
  return (
    <PublicLayout>
      <HeroCustom 
        overline="XPS"
        title="Xircus Avatars with Premium Access"
        desc="DAO Membership, Exclusive Discounts, Early Access Pass"
        href="https://beta.xircus.app/punks"
        link="Explore Avatars"
        />      
    </PublicLayout>
  )
}
