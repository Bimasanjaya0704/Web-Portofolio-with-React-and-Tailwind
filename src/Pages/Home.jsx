import Navbar from "../Components/Navbar"
import Beranda from "../Components/Beranda"
import About from "../Components/About"
import Portofolio from "../Components/Portofolio"
import Clients from "../Components/Clients"
import Blog from "../Components/Blog"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"

const Home = () => {
    return(
        <>
        <Navbar/>
        <Beranda/>
        <About/>
        <Portofolio/>
        <Clients/>
        <Blog/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home