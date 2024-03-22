import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Feature from './components/Feature/Feature';
import FeatureList from './components/FeatureList/FeatureList';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Hero from './components/Hero/Hero';
import Logo from './components/Logos/Logo';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Productivity from './components/Productivity/Productivity';
import PromoSection from './components/PromoSection/PromoSection';
import Team from './components/Team/Team';


function App() {
  return (
    <>
      < Navbar />
      < Hero />
      < Logo />
      < Productivity />
      < PromoSection />
      < ProductList />
      < AboutUs />
      < Team />
      < GetStarted />
      < Contact />
      < Map />
      < Footer />
    </>
  );
}

export default App;
