import { Image, SubTitle, Text, Title, Wrapper, Item, List } from './SDKDev.styled';

const SDKDev = () => {
  return (
    <Wrapper>
      <Title>sdk development</Title>

      <Image src="https://i.ibb.co/T2Qtp26/mobile-app-dev.png" alt="sdk development" />

      <List>
        <Item>
          <SubTitle>Difference between SDKs and APIs</SubTitle>

          <Text>
            SDKs let developers create applications and act as the building blocks for the
            software product. APIs, on the other hand, provide the code that enables two
            software programs to communicate with each other. An API defines the correct
            way for a developer to request services from an operating system or other
            application and expose data within different contexts and across multiple
            channels.
          </Text>

          <Text>
            When a developer uses an SDK to develop applications and create systems, those
            apps have to communicate with other applications. An SDK includes an API to
            enable that communication.
          </Text>
        </Item>

        <Item>
          <SubTitle>How to use an SDK</SubTitle>

          <Text>
            A developer needs an iOS SDK to build iOS apps, an Android toolkit for
            building Android apps, a Nordic SDK to build Bluetooth or wireless apps and a
            VMware SDK to enable integration with the VMware platform.
          </Text>

          <Text>
            For large-scale software-as-a-service applications, enterprises generally use
            the open source .NET SDK platform, which is backed by Microsoft. Other
            examples of popular SDKs include the Google Cloud SDK, Microsoft Windows SDK,
            Java Development Kit and the Node.js SDK. Although SDKs are largely associated
            with native mobile apps, developers can use them in connection with websites,
            set-top boxes and other digital platforms.
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default SDKDev;
