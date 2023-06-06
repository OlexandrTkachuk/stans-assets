import { Image, SubTitle, Text, Title, Wrapper, Item, List } from './SDKModeling.styled';

const SDKModeling = () => {
  return (
    <Wrapper>
      <Title>sdk 3d modeling</Title>

      <Image
        src="https://i.ibb.co/s90qB8Y/3-Dmodel-Services.png"
        alt="sdk 3d modeling "
      />

      <List>
        <Item>
          <SubTitle>software tools for beginners.</SubTitle>

          <Text>
            D modeling can have a dauntingly steep learning curve, and booting up many of
            the advanced CAD software commonly used to create digital objects is sure to
            leave total newcomers totally bewildered. The most celebrated tools, like
            SketchUp or Blender, will present you with an intimidating array of tools and
            unfamiliar control schemes that could force anyone’s hands to raise in defeat.
          </Text>

          <Text>
            But fear not! Even the most advanced 3D modeling software can be accessible,
            given the right introduction.
          </Text>
        </Item>

        <Item>
          <SubTitle>takes a lot of practice</SubTitle>

          <Text>
            Know that beginner 3D modeling software, though simple and more limited in
            features, are still plenty useful no matter your skill level. The skills you
            gain learning through entry-level software will be largely transferable to
            more advanced software.
          </Text>

          <Text>
            Even seasoned designers will pop into Tinkercad from time to time to design a
            quick model; so you’ll still be learning practical software and skills while
            getting to grips with the basics. Let’s dive in!
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default SDKModeling;
