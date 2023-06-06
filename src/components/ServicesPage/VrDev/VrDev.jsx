import { Image, SubTitle, Text, Title, Wrapper, Item, List } from './VrDev.styled';

const VrDev = () => {
  return (
    <Wrapper>
      <Title>vr app development</Title>

      <Image
        src="https://i.ibb.co/tp4VP9s/vr-App-Development-Mobile.png"
        alt="Ar app development"
      />

      <List>
        <Item>
          <SubTitle>Basic Concepts</SubTitle>

          <Text>
            This section introduces fundamentals for creating app or gameplay mechanics.
            We’ve limited the explanation to core workflow concepts that come handy in
            building this VR app. To learn more about Unity’s concepts and workflows in
            detail, go to Unity User Manual.
          </Text>

          <Text>
            Game Objects are fundamental objects that represent characters, props, lights,
            camera, or special effects. In this app, we’ll use 3D objects that consist of
            primitive shapes such as plane, cube, and sphere.
          </Text>
        </Item>

        <Item>
          <SubTitle>Hierarchy view</SubTitle>

          <Text>
            Components define the behavior of the game object. Mainly, the Transform
            component determines the position, rotation, and scale of each game object and
            the values are represented in form of X, Y, and Z coordinates for each
            property. By default, the position is set to (0,0,0), which is also known as
            the origin point from where all the coordinate calculations take place in the
            scene.
          </Text>

          <Text>
            Material adds texture and color to any object. In this app, we’ll limit the
            usage of materials to color the objects and will not go in other technical
            details.
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default VrDev;
