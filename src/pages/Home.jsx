import HomeAchievements from 'components/HomePage/HomeAchievements/HomeAchievements';
import HomeClatch from 'components/HomePage/HomeClatch/HomeClatch';
import HomeHero from 'components/HomePage/HomeHero/HomeHero';
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
    </div>
  );
};

export default Home;
