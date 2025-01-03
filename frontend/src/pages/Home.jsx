import CategoryCarousel from "@/components/CategoryCarousel"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import LatestJobs from "@/components/LatestJobs"
import Navbar from "@/components/shared/Navbar"



const Home = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <CategoryCarousel/>
     <LatestJobs/>
     <Footer/>
    </div>
  )
}

export default Home
