import { useSelector, useDispatch } from 'react-redux';
import { selectIsMenuOpen } from 'redux/selectors';
import { toggleMenuMode } from 'redux/slices/burgerMenuSlice';

import {
  ButtonClose,
  List,
  Nav,
  NavigationWrapper,
  StyledLink,
  ButtonContact,
  Item,
  SubItem,
  AnchorLink,
} from './Navigation.styled';

const Navigation = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <NavigationWrapper>
      <Nav isOpen={isMenuOpen}>
        <ButtonClose type="button" onClick={() => dispatch(toggleMenuMode())}>
          close
        </ButtonClose>

        <List>
          <Item>
            <StyledLink to="/services">services</StyledLink>
          </Item>

          <SubItem>
            <AnchorLink href="#game-dev">Game development</AnchorLink>
          </SubItem>

          <SubItem>
            <AnchorLink href="#sdk-dev">SDK development</AnchorLink>
          </SubItem>

          <SubItem>
            <AnchorLink href="#modeling">3D modeling services</AnchorLink>
          </SubItem>

          <SubItem>
            <AnchorLink href="#vr-dev">VR App development</AnchorLink>
          </SubItem>

          <Item>
            <StyledLink to="/technologies">technologies</StyledLink>
          </Item>

          <SubItem>
            <StyledLink>Android</StyledLink>
          </SubItem>

          <SubItem>
            <StyledLink>IOS</StyledLink>
          </SubItem>

          <SubItem>
            <StyledLink>Unity</StyledLink>
          </SubItem>

          <Item>
            <StyledLink to="/products">products</StyledLink>
          </Item>

          <Item>
            <StyledLink to="/portfolio">portfolio</StyledLink>
          </Item>

          <Item>
            <StyledLink to="/blog">blog</StyledLink>
          </Item>

          <Item>
            <StyledLink to="/aboutus">about us</StyledLink>
          </Item>

          <SubItem>
            <StyledLink to="/contacts">contacts</StyledLink>
          </SubItem>

          <SubItem>
            <StyledLink to="/team">team</StyledLink>
          </SubItem>

          <SubItem>
            <StyledLink to="/join">join</StyledLink>
          </SubItem>
        </List>

        <ButtonContact>Contact us</ButtonContact>
      </Nav>
    </NavigationWrapper>
  );
};

export default Navigation;
