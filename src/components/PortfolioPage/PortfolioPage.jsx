import ServicesProjects from 'components/ServicesPage/ServicesProjects/ServicesProjects';
import { Image, Title, Wrapper } from './PortfolioPage.styled';

const PortfolioPage = () => {
  return (
    <Wrapper>
      <Title>Stan assets portfolio</Title>

      <Image src="https://i.ibb.co/rwbByKq/ar-app-developer.png" alt="portfolio" />

      <ServicesProjects />
    </Wrapper>
  );
};

export default PortfolioPage;
