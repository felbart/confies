import { Outlet } from "react-router"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CTA from "../sections/CTA"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

export default MainLayout