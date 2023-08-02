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

export default function Contracts() {
  return (
    <PublicLayout>
      <HeroCustom 
        overline="Contracts"
        title="Create, Publish and Deploy Contracts"
        desc="Manage, share or monetize smart contracts"
        href="https://beta.xircus.app/contracts/deploy"
        />
    </PublicLayout>
  )
}
