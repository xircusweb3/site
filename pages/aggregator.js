import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"

// Listing currencies for free

export default function OpenCurr() {
  return (
    <PublicLayout>
      <HeroCustom 
        overline="Aggregator"
        title="Share Your NFTs To Global Marketplaces"
        desc="Migrate or export your NFT collections to other marketplaces"
        />      
    </PublicLayout>
  )
}
