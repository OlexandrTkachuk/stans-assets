import ServicesProjects from 'components/ServicesPage/ServicesProjects/ServicesProjects';
import { Image, Title, Wrapper } from './PortfolioPage.styled';

const PortfolioPage = () => {
  return (
    <Wrapper>
      <Title>stan assets portfolio</Title>

      <Image src="https://i.ibb.co/rwbByKq/ar-app-developer.png" alt="portfolio" />

      <ServicesProjects />
    </Wrapper>
  );
};

export default PortfolioPage;

// https://i.ibb.co/wCgPxpC/project-3.png
// https://i.ibb.co/R4gsdfk/project-1.png
// https://i.ibb.co/3Yjp2x2/project-2.png
