
import NavbarLayout from '../../components/Home/Navbar';
import HeroLayout from '../../components/Home/Hero';
import FeaturesLayout from '../../components/Home/Features';
import Features2Layout from '../../components/Home/Features2';
import FruitsShopLayout from '../../components/Home/FruitsShop';
import FooterLayout from '../../components/Home/Footer';
import VegetableLayout from '../../components/Home/VegetableCarousel';
import AdLayout from '../../components/Home/Adsection';
import ContactLayout from '../../components/Home/Contactsection';
import '@fortawesome/fontawesome-free/css/all.css'; // FontAwesome
// import 'lightbox2/dist/css/lightbox.min.css'; // Lightbox
// import '../../assets/lib/lightbox/css/lightbox.min.css'; // 
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css'; // OwlCarousel
import '../../assets/css/bootstrap.min.css'; // Bootstrap
import '../../assets/css/style.css'; // Custom CSS
const HomePage = () => {
    return (
      <div>
        <NavbarLayout />
        <HeroLayout />
        <FeaturesLayout />
        <FruitsShopLayout />
        <Features2Layout /> 
        <VegetableLayout/>
        {/* //<AdLayout/> */}
        <ContactLayout />
        <FooterLayout />
      </div>
    );
};

export default HomePage;
