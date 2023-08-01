import { useRouter } from "next/router"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HEADER_INNER_LINKS, HEADER_LINKS } from "../constants/links"

export const PublicLayout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}