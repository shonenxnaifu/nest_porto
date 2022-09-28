import Footer from "./Footer"
import Header from "./Header"


const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main className="max-w-6xl mx-auto">{children}</main>
    <Footer/>
    </>
  )
}

export default Layout