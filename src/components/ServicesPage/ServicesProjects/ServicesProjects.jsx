import {
  Image,
  ImageWrapper,
  Item,
  List,
  SubTitle,
  Text,
  TextWrapper,
  Title,
  Wrapper,
} from './ServicesProjects.styled';
import servicesProjects from '../../../helpers/servicesProjects.json';

const ServicesProjects = () => {
  return (
    <Wrapper>
      <Title>Recent projects</Title>

      <List>
        {servicesProjects.map((item, index) => (
          <Item key={index}>
            <ImageWrapper>
              <Image src={item.url} alt={item.name} />
            </ImageWrapper>

            <TextWrapper>
              <SubTitle>{item.name}</SubTitle>
              <Text>{item.description}</Text>
            </TextWrapper>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default ServicesProjects;
