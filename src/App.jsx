import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import SocialMediaSection from './components/SocialMediaSection'
import Posts from './components/Posts'
import Locations from './components/Locations'
import Careers  from './components/Careers'
import Footer from './components/Footer'
import OurSolutions from "./components/OurSolutions";
import SocialResponsibility from "./components/SocialResponsibility";
import SuccessStories from "./components/SuccessStories";
import About from "./components/About";
import TrustedBy from "./components/TrustedBy";

export default function App() {
  return (
<div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Herosection />
      <About />
      <TrustedBy />
      <OurSolutions />
      <SocialResponsibility />
      <SuccessStories />
      <SocialMediaSection />
      <Posts />
      <Locations />
     
      <Careers />
      <Footer />
    </div>
  );
}
