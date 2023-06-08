import { Image, Item, List, SubTitle, Text, Title, Wrapper } from './IOS.styled';

const IOS = () => {
  return (
    <Wrapper>
      <Title>IOS</Title>

      <Image src="https://i.ibb.co/F8qTChY/ios.png" alt="IOS" />

      <List>
        <Item>
          <SubTitle>Header 1</SubTitle>

          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eos
            dignissimos nobis, molestiae ducimus iusto aspernatur velit aliquid tempore
            rerum ab ea aperiam asperiores, at, dolorem vitae alias maxime! Architecto.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur
            maiores dicta quas dolore inventore tempora voluptas, vel aspernatur veritatis
            qui cumque ut illo libero? In ex ab fugit! Minus.
          </Text>
        </Item>

        <Item>
          <SubTitle>Header 2</SubTitle>

          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eos
            dignissimos nobis, molestiae ducimus iusto aspernatur velit aliquid tempore
            rerum ab ea aperiam asperiores, at, dolorem vitae alias maxime! Architecto.
            Lorem ipsum dolor sit amet consectetur.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur
            maiores dicta quas dolore inventore tempora voluptas, vel aspernatur veritatis
            qui cumque ut illo libero? In ex ab fugit! Minus. Lorem ipsum dolor sit amet
            consectetur.
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default IOS;
