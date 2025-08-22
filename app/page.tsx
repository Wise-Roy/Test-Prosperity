import About from "@/components/About";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
export default function Page() {
  return (
     <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}