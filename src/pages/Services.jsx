import FAQ from 'components/FAQ/FAQ';
import Footer from 'components/Foooter/Footer';
import HomeClatch from 'components/HomePage/HomeClatch/HomeClatch';
import HomeContacts from 'components/HomePage/HomeContacts/HomeContacts';
import HomeSponsor from 'components/HomePage/HomeSponsor/HomeSponsor';
import Navbar from 'components/Navbar/Navbar';
import ServicesProjects from 'components/ServicesPage/ServicesProjects/ServicesProjects';
import ServicesTypes from 'components/ServicesPage/ServicesTypes/ServicesTypes';

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesTypes />
      <HomeClatch />
      <HomeSponsor />
      <HomeContacts />
      <ServicesProjects />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Services;
