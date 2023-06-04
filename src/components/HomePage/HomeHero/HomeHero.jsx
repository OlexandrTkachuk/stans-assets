import { useSelector, useDispatch } from 'react-redux';
import { selectIsMenuOpen } from 'redux/selectors';
import { toggleMenuMode } from 'redux/slices/burgerMenuSlice';

import {
  HeroBackground,
  HeroVector,
  Logo,
  LogoWrapper,
  MenuIcon,
  StyledLink,
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
    </Wrapper>
  );
};

export default HomeHero;
