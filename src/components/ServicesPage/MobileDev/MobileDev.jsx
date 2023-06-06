import { Image, Item, List, SubTitle, Text, Title, Wrapper } from './MobileDev.styled';

const MobileDev = () => {
  return (
    <Wrapper>
      <Title>Mobile Application Development</Title>

      <Image
        src="https://i.ibb.co/T2Qtp26/mobile-app-dev.png"
        alt="Mobile Application Development"
      />

      <List>
        <Item>
          <SubTitle>Maestro</SubTitle>

          <Text>
            Our open-source mobile UI testing framework, Maestro. This is the new standard
            in mobile UI automation.
          </Text>

          <Text>
            Your personal assistant to help you write Maestro Flows fast, whether you
            prefer no-code, low-code, or all-code.
          </Text>

          <Text>
            The easiest way to test your Maestro Flows automatically in CI. Upload your
            Flows via one of our CI integrations, and we'll handle the rest.
          </Text>
        </Item>

        <Item>
          <SubTitle>Apple's Vision Pro</SubTitle>

          <Text>
            Guess what? Apple has just dropped something HUGE. They've unveiled their
            latest creation - the "Vision Pro" VR headset, and it's not just a headset,
            it's a groundbreaking leap into the future of spatial computing! So, buckle
            up, let's dive in!
          </Text>

          <Text>
            Spatial computing? What's that, you ask? Well, it's all about blending digital
            content with your physical space. With Vision Pro, you navigate this digital
            world with your eyes, hands, and voice.
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default MobileDev;
