import HomeClatch from 'components/HomePage/HomeClatch/HomeClatch';
import HomeHero from 'components/HomePage/HomeHero/HomeHero';
import HomeTechnologies from 'components/HomePage/HomeTechnologies/HomeTechnologies';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeTechnologies />
      <HomeClatch />
    </div>
  );
};

export default Home;
