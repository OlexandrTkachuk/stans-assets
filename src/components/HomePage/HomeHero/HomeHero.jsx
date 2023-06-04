import { useSelector, useDispatch } from 'react-redux';
import { selectIsMenuOpen } from 'redux/selectors';
import { toggleMenuMode } from 'redux/slices/burgerMenuSlice';

import {
  ButtonContactUs,
  ButtonMore,
  HeroBackground,
  HeroTitle,
  HeroVector,
  List,
  Logo,
  LogoWrapper,
  MenuIcon,
  StyledLink,
  Text,
  Wrapper,
} from './HomeHero.styled';

const HomeHero = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <Wrapper>
      <HeroBackground />
      <HeroVector />

      <LogoWrapper>
        <StyledLink to="/">
          <Logo
            src="https://i.ibb.co/NrtHgb0/logo-mobile.png"
            alt="stans assets logo"
          />
        </StyledLink>

        <MenuIcon
          onClick={() => dispatch(toggleMenuMode())}
          aria-label={isMenuOpen ? 'Open Menu' : 'Close Menu'}
        />
      </LogoWrapper>

      <div style={{ position: 'relative' }}>
        <HeroTitle>Focus on the product and let us do the rest!</HeroTitle>

        <List>
          <li>
            <ButtonMore>More</ButtonMore>
          </li>

          <li>
            <ButtonContactUs>Contact us</ButtonContactUs>
          </li>
        </List>

        <Text>
          We’re an Indian software development company focused on just one thing
          - offshore software development services. We have 16+ years of
          experience and a team of 450+ developers working efficiently to
          deliver unique solutions to start-ups, software development companies,
          enterprises, and digital agencies to simplify their IT outsourcing
          experience & reduce time/cost to market.
        </Text>
      </div>
    </Wrapper>
  );
};

export default HomeHero;
