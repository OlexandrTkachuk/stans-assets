import Footer from 'components/Foooter/Footer';
import HomeClatch from 'components/HomePage/HomeClatch/HomeClatch';
import HomeContacts from 'components/HomePage/HomeContacts/HomeContacts';
import HomeSponsor from 'components/HomePage/HomeSponsor/HomeSponsor';
import Navbar from 'components/Navbar/Navbar';
import ServicesTypes from 'components/ServicesPage/ServicesTypes/ServicesTypes';

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesTypes />
      <HomeClatch />
      <HomeSponsor />
      <HomeContacts />
      <Footer />
    </div>
  );
};

export default Services;

// https://i.ibb.co/rwbByKq/ar-app-developer.png
// https://i.ibb.co/0hsT730/game-dev.png
// https://i.ibb.co/T2Qtp26/mobile-app-dev.png
