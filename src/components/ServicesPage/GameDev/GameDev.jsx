import { Image, SubTitle, Text, Title, Wrapper, Item, List } from './GameDev.styled';

const GameDev = () => {
  return (
    <Wrapper>
      <Title>Game development outsourcing</Title>

      <Image
        src="https://i.ibb.co/0hsT730/game-dev.png"
        alt="Game development outsourcing"
      />

      <List>
        <Item>
          <SubTitle>End level meta layer</SubTitle>

          <Text>
            Testing a meta layer at the end of the level that lets users build a city
            encouraged greater user engagement and created additional opportunities for
            showing rewarded videos.
          </Text>

          <Text>
            Users can progress through city maps, adding buildings to each map by
            accumulating currency from either moving through game levels or watching
            rewarded videos. And since some buildings can only be unlocked exclusively
            through rewarded videos, this further incen tivizes users to engage with those
            ads.
          </Text>
        </Item>

        <Item>
          <SubTitle>Daily missions</SubTitle>

          <Text>
            Introducing daily missions introduced a new way to enhance the sense of
            achievement users got by progressing through the game. Users can return to the
            game and see a new missions screen every day - by completing each of these,
            they earn a reward. And if they finish all of them, they receive a bonus.
          </Text>

          <Text>
            During these missions - which act as additional goals for users to achieve
            during the game - users can engage with rewarded videos to earn boosters and
            upgrades that help them progress. They can also watch a rewarded video to
            automatically complete the mission and get one step closer to the
            all-missions-complete bonus.
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default GameDev;
