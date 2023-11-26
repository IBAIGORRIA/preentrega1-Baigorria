import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import './../main.css'
import Footer from "../components/Footer/Footer"
import background from './../imgs/BCKG.jpg'

const Layout = () => {
  return (
    <div style={{backgroundImage: `url(${background})`,  width:'100%'}}>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout