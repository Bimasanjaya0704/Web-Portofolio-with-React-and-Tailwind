import Navbar from "../Components/Navbar"
import Beranda from "../Components/Beranda"
import About from "../Components/About"
import Portofolio from "../Components/Portofolio"
import Clients from "../Components/Clients"
import Blog from "../Components/Blog"

const Home = () => {
    return(
        <>
        <Navbar/>
        <Beranda/>
        <About/>
        <Portofolio/>
        <Clients/>
        <Blog/>
        </>
    )
}

export default Home