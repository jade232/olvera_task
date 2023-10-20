import './App.css';
import About from './components/About/About';
import FooterSection from './components/Footer/FooterSection';
import AppDrawer from './components/Navbar/AppDrawer';
import HeroSection from './components/Navbar/HeroSection/HeroSection';
import MainNavbar from './components/Navbar/MainNavbar';
import Careers from './components/Testimonials/Careers';
import CountSection from './components/Testimonials/CountSection';
import Services from './components/Testimonials/Services';
import Testimonials from './components/Testimonials/Testimonials';
import VideoSection from './components/Testimonials/VideoSection';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <HeroSection />
      <About />
      <CountSection />
      <Services />
      <Careers />
      <VideoSection />
      <Testimonials />
      <FooterSection />
      {/* <AppDrawer /> */}
    </div>
  );
}

export default App;
