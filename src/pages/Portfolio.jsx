import Footer from 'components/Foooter/Footer';
import HomeContacts from 'components/HomePage/HomeContacts/HomeContacts';
import HomeSponsor from 'components/HomePage/HomeSponsor/HomeSponsor';
import Navbar from 'components/Navbar/Navbar';
import PortfolioPage from 'components/PortfolioPage/PortfolioPage';

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <PortfolioPage />
      <HomeSponsor />
      <HomeContacts />
      <Footer />
    </div>
  );
};

export default Portfolio;
