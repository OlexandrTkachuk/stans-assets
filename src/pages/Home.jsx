import HomeAchievements from 'components/HomePage/HomeAchievements/HomeAchievements';
import HomeClatch from 'components/HomePage/HomeClatch/HomeClatch';
import HomeHero from 'components/HomePage/HomeHero/HomeHero';
import HomePartners from 'components/HomePage/HomePartners/HomePartners';
import HomeServices from 'components/HomePage/HomeServices/HomeServices';
import HomeSponsor from 'components/HomePage/HomeSponsor/HomeSponsor';
import HomeTechnologies from 'components/HomePage/HomeTechnologies/HomeTechnologies';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeTechnologies />
      <HomeClatch />
      <HomeServices />
      <HomeSponsor />
      <HomeAchievements />
      <HomePartners />
    </div>
  );
};

export default Home;
