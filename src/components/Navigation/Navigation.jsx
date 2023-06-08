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

        <List onClick={() => dispatch(toggleMenuMode())}>
          <Item>
            <StyledLink to="/services">services</StyledLink>
          </Item>

          <SubItem>
            <StyledLink to="/services/gameDev">Game development</StyledLink>
          </SubItem>

          <SubItem>
            <StyledLink to="/services/sdkDev">SDK development</StyledLink>
          </SubItem>

          <SubItem>
            <StyledLink to="/services/3dModeling">3D modeling services</StyledLink>
          </SubItem>

          <SubItem>
            <StyledLink to="/services/vrDev">VR App development</StyledLink>
          </SubItem>

          <Item>
            <StyledLink to="/technologies">technologies</StyledLink>
          </Item>

          <SubItem>
            <StyledLink to="/technologies/android">Android</StyledLink>
          </SubItem>

          <SubItem>
            <StyledLink to="/technologies/ios">IOS</StyledLink>
          </SubItem>

          <SubItem>
            <StyledLink to="/technologies/unity">Unity</StyledLink>
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
