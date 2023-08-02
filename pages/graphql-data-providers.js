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

export default function GraphQLProviders() {
  return (
    <PublicLayout>
      <HeroCustom 
        overline="Data Providers"
        title="GraphQL APIs for Deployed Web3 Apps"
        desc="Instant GraphQL Queryable APIs for your Web3 apps"
        href="https://beta.xircus.app/providers"
        link="Explore API Providers"
        />
    </PublicLayout>
  )
}
