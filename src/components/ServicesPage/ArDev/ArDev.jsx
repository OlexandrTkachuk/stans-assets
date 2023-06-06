import { Image, SubTitle, Text, Title, Wrapper, Item, List } from './ArDev.styled';

const ArDev = () => {
  return (
    <Wrapper>
      <Title>Ar app development</Title>

      <Image
        src="https://i.ibb.co/rwbByKq/ar-app-developer.png"
        alt="Ar app development"
      />

      <List>
        <Item>
          <SubTitle>MARKERLESS AR</SubTitle>

          <Text>
            The development of AR projects is more difficult than it seems at first
            glance, especially if you are looking to create not an ordinary AR feature for
            fun, but a serious multifunctional product. Augmented reality has gone beyond
            the entertainment industry and is actively used in construction, retail,
            education, manufacturing, real estate, and more these days.
          </Text>

          <Text>
            This guide covers the development of such projects that require not just
            animations or graphics, but the design of complex systems for truly innovative
            solutions.
          </Text>
        </Item>

        <Item>
          <SubTitle>LOCATION-BASED AR</SubTitle>

          <Text>
            When users enter a particular location, AR applications can use that data to
            accurately display virtual content. This is how location-based AR works.
            Instead of simply displaying an object in relative space, developers can show
            objects in geographical space for users to observe and interact with.
          </Text>

          <Text>
            Technology-wise, location-based AR relies on GPS, a digital compass, and an
            accelerometer. Moreover, there are several approaches to narrow down the
            position of the device.
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default ArDev;
