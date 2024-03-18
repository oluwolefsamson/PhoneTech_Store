import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Feature from './components/Feature/Feature';
import FeatureList from './components/FeatureList/FeatureList';
import Hero from './components/Hero/Hero';
import Logo from './components/Logos/Logo';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Productivity from './components/Productivity/Productivity';
import PromoSection from './components/PromoSection/PromoSection';


function App() {
  return (
    <>
      < Navbar />
      < Hero />
      < Logo />
      < Productivity />
      {/* < Feature /> */}
      < PromoSection />
      < ProductList />
      < AboutUs />
    </>
  );
}

export default App;
