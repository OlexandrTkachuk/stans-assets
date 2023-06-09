import {
  ContactLink,
  Icon,
  List,
  Logo,
  NavList,
  StyledLink,
  Wrapper,
  SubLink,
  Item,
  Copyright,
  FooterWrapper,
  CopyrightTop,
  Text,
  CopyrightBottom,
} from './Footer.styled';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <Link to="/">
          <Logo src="https://i.ibb.co/NrtHgb0/logo-mobile.png" alt="footer logo" />
        </Link>

        <List>
          <li>
            <ContactLink to="https://www.facebook.com/">
              <Icon src="https://i.ibb.co/y5gQKdy/Vector-1.png" alt="facebook" />
            </ContactLink>
          </li>

          <li>
            <ContactLink to="https://www.linkedin.com/feed/">
              <Icon src="https://i.ibb.co/Q6tQY8f/Vector-2.png" alt="linkedin" />
            </ContactLink>
          </li>

          <li>
            <ContactLink to="https://www.viber.com/ru/">
              <Icon src="https://i.ibb.co/6HZHcKC/Vector.png" alt="viber" />
            </ContactLink>
          </li>

          <li>
            <ContactLink to="https://www.skype.com/uk/">
              <Icon src="https://i.ibb.co/WcwH2hT/Vector-3.png" alt="skype" />
            </ContactLink>
          </li>

          <li>
            <ContactLink to="https://github.com/OlexandrTkachuk">
              <Icon src="https://i.ibb.co/cY4JGJf/Vector-4.png" alt="github" />
            </ContactLink>
          </li>
        </List>

        <NavList>
          <Item>
            <StyledLink to="/services">Services</StyledLink>

            <SubLink to="/services/mobileDev">Mobile Application Development</SubLink>

            <SubLink to="/services/gameDev">Game Development Outsourcing</SubLink>

            <SubLink to="/services/vrDev">VR App Development</SubLink>

            <SubLink to="/services/dedicatedDev">Dedicated Developers</SubLink>

            <SubLink to="/services/sdkDev">SDK Development</SubLink>

            <SubLink to="/services/3dModeling">3D Modeling services</SubLink>
          </Item>
          <Item>
            <StyledLink>Technologies</StyledLink>

            <SubLink to="/technologies/android">Android</SubLink>
            <SubLink to="/technologies/ios">IOS</SubLink>
            <SubLink to="/technologies/unity">Unity</SubLink>
          </Item>
          <Item>
            <StyledLink>Products</StyledLink>
          </Item>
          <Item>
            <StyledLink>Portfolio</StyledLink>
          </Item>
          <Item>
            <StyledLink>Blog</StyledLink>
          </Item>
          <Item>
            <StyledLink>About us</StyledLink>

            <SubLink to="">Contacts</SubLink>
            <SubLink to="">Team</SubLink>
            <SubLink to="">Join the Team</SubLink>
          </Item>
        </NavList>
      </Wrapper>

      <Copyright>
        <CopyrightTop>
          <Text>Privacy policy</Text>
          <Text>Cookies policy</Text>
        </CopyrightTop>

        <CopyrightBottom>
          <Text>© 2021 - Stan’s Assets. All Right Reserved</Text>
        </CopyrightBottom>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
