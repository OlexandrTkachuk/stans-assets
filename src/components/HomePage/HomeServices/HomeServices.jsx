import {
  Image,
  Item,
  List,
  SubTitle,
  Text,
  Title,
} from './HomeServices.styled';

const HomeServices = () => {
  return (
    <div>
      <Title>Services</Title>

      <List>
        <Item>
          <SubTitle id="game-dev">GAME DEVELOPMENT</SubTitle>
          <Text>
            With over 5 years of game development experience, we have all that
            it takes to develop a high quality product.
          </Text>
          <Image
            src="https://i.ibb.co/d7hSPwF/game-Development.png"
            alt="GAME DEVELOPMENT"
          />
        </Item>

        <Item>
          <SubTitle id="sdk-dev">SDK Development</SubTitle>
          <Text>
            Stan's Assets is one of the most popular developers within the Unity
            Asset Store. Want to test some of our amazing software? Check out
            one of our many plugins. We guarantee your satisfaction.
          </Text>
          <Image
            src="https://i.ibb.co/ZL7jg00/SDKdevelopment.png"
            alt="SDK Development"
          />
        </Item>

        <Item>
          <SubTitle id="modeling">3D Modeling services</SubTitle>
          <Text>
            We pride ourselves on producing high quality graphics support.
            Providing experienced designers to any project, and offering
            affordable pricing for almost any budget.
          </Text>
          <Image
            src="https://i.ibb.co/s90qB8Y/3-Dmodel-Services.png"
            alt="3D Modeling services"
          />
        </Item>

        <Item>
          <SubTitle id="vr-dev">VR App Development</SubTitle>
          <Text>
            Virtual Reality is the future of gaming. We have expertise that can
            create a professional and fluid virtual reality experience unlike
            anything you have ever seen.
          </Text>
        </Item>
      </List>
    </div>
  );
};

export default HomeServices;
