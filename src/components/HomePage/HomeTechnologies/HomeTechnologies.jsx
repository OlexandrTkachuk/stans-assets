import { List, Text, Title, Wrapper } from './HomeTechnologies.styled';

const HomeTechnologies = () => {
  return (
    <Wrapper>
      <Title>Technologies</Title>

      <Text>
        <span style={{ color: '#00A4E8 ' }}>Stan’s</span>{' '}
        <span style={{ color: '#194484 ' }}>Assets</span> is a team of
        developers that are committed to developing high quality and engaging
        entertainment software
      </Text>

      <List>
        <li>
          <img
            src="https://i.ibb.co/hMfX9TH/Group-409.jpg"
            alt="Android"
            width={64}
            height={64}
          />
        </li>
        <li>
          <img
            src="https://i.ibb.co/LYxSdhy/Group-410.jpg"
            alt="IOS"
            width={64}
            height={64}
          />
        </li>
        <li>
          <img
            src="https://i.ibb.co/wgy22xc/Group-411.jpg"
            alt="Unity"
            width={64}
            height={64}
          />
        </li>
      </List>

      <Text>
        Our engineers develop applications for the most popular platforms.
      </Text>
    </Wrapper>
  );
};

export default HomeTechnologies;
