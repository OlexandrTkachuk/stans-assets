import HomeClatch from 'components/HomePage/HomeClatch/HomeClatch';
import HomeHero from 'components/HomePage/HomeHero/HomeHero';
import HomeServices from 'components/HomePage/HomeServices/HomeServices';
import HomeTechnologies from 'components/HomePage/HomeTechnologies/HomeTechnologies';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeTechnologies />
      <HomeClatch />
      <HomeServices />
    </div>
  );
};

export default Home;
