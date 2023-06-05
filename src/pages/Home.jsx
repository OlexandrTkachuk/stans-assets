import Footer from 'components/Foooter/Footer';
import HomeAchievements from 'components/HomePage/HomeAchievements/HomeAchievements';
import HomeClatch from 'components/HomePage/HomeClatch/HomeClatch';
import HomeContacts from 'components/HomePage/HomeContacts/HomeContacts';
import HomeHero from 'components/HomePage/HomeHero/HomeHero';
import HomePartners from 'components/HomePage/HomePartners/HomePartners';
import HomeServices from 'components/HomePage/HomeServices/HomeServices';
import HomeSponsor from 'components/HomePage/HomeSponsor/HomeSponsor';
import HomeTechnologies from 'components/HomePage/HomeTechnologies/HomeTechnologies';

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeTechnologies />
      <HomeClatch />
      <HomeServices />
      <HomeSponsor />
      <HomeAchievements />
      <HomePartners />
      <HomeContacts />
      <Footer />
    </>
  );
};

export default Home;
