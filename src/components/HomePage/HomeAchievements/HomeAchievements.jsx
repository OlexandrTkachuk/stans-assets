import { List, Title, Wrapper } from './HomeAchievements.styled';

const HomeAchievements = () => {
  return (
    <Wrapper>
      <Title>Achievements</Title>

      <List>
        <li>
          <img
            src="https://i.ibb.co/gWG8qL2/achi-1.png"
            alt="Collaboration with Moon Studios on WotW AAA Unity game."
          />
        </li>
        <li>
          <img
            src="https://i.ibb.co/hFwnhBH/achi-2.png"
            alt="50+ successfully launched projects on the the market."
          />
        </li>
        <li>
          <img
            src="https://i.ibb.co/y09qjCX/achi-3.png"
            alt="Asset store publisher since 2013"
          />
        </li>
        <li>
          <img
            src="https://i.ibb.co/jkxZPXK/achi-4.png"
            alt="Our products (packages) used by 100k+ devs in 5k+ commercial projects worldwide"
          />
        </li>
      </List>
    </Wrapper>
  );
};

export default HomeAchievements;
