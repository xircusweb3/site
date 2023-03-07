import { Box, Container, Image, Center, Heading, Stack } from "@chakra-ui/react"
import { Blockchains } from "../components/Blockchains"
import { Calculator } from "../components/Calculator"
import { Earn } from "../components/Earn"
import { Feats } from "../components/Feats"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Partners } from "../components/Partners"
import { Products } from "../components/Products"
import { Reach } from "../components/Reach"
import { Roadmap } from "../components/Roadmap"
import { Skins } from "../components/Skins"
import { Social } from "../components/Social"
import { Solutions } from "../components/Solutions"
import { Team } from "../components/Team"
import { Token } from "../components/Token"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Solutions />
      <Skins />
      <Blockchains />
      <Feats />
      <Reach />
      <Social />
      <Products />
      <Earn />
      <Token />
      <Calculator />
      <Roadmap />
      <Team />

      <Footer />
    </>
  )
}
