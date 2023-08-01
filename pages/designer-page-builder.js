import { Blockchains } from "../components/Blockchains"
import { Calculator } from "../components/Calculator"
import { Earn } from "../components/Earn"
import { Feats } from "../components/Feats"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Press } from "../components/Press"
import { Partners } from "../components/Partners"
import { Products } from "../components/Products"
import { Reach } from "../components/Reach"
import { Roadmap } from "../components/Roadmap"
import { Skins } from "../components/Skins"
import { Social } from "../components/Social"
import { Solutions } from "../components/Solutions"
import { Team } from "../components/Team"
import { Token } from "../components/Token"
import Script from 'next/script'
import { ContractAI } from "../components/ContractAI"
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
