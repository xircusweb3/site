import { PublicLayout } from "../layouts/PublicLayout"
import { HeroCustom } from "../components/HeroCustom"

// Listing currencies for free

export default function OpenCurr() {
  return (
    <PublicLayout>
      <HeroCustom 
        overline="Open Currencies"
        title="List and Pay with your Tokens"
        desc="Add any ERC20 token as payment currency for your web3 apps"
        />      
    </PublicLayout>
  )
}
