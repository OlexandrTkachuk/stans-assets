import FAQ from 'components/FAQ/FAQ';
import Footer from 'components/Foooter/Footer';
import HomeContacts from 'components/HomePage/HomeContacts/HomeContacts';
import HomeSponsor from 'components/HomePage/HomeSponsor/HomeSponsor';
import Navbar from 'components/Navbar/Navbar';
import ServicesProjects from 'components/ServicesPage/ServicesProjects/ServicesProjects';
import ServicesTypes from 'components/ServicesPage/ServicesTypes/ServicesTypes';
import TechnologiesTypes from 'components/TechnologiesPage/TechnologiesType/TechnologiesTypes';

const Technologies = () => {
  return (
    <div>
      <Navbar />
      <TechnologiesTypes />
      <ServicesTypes />
      <HomeSponsor />
      <HomeContacts />
      <ServicesProjects />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Technologies;

