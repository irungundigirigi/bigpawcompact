import Navbar from './navbar'
import Footer from './footer'
import Whatsapp from './whatsapp'
import SideLinks from './sideLinks'
import Topbanner from './topbanner'



export default function Layout({ children }) {
  return (
    <>
      <Topbanner />
      <Navbar />
      <SideLinks />
      <main>{children}</main>
      <Whatsapp />
      <Footer />
    </>
  )
}