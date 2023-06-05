import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterWrapper = styled.footer``;

export const Wrapper = styled.div`
  background-image: url(https://i.ibb.co/MMCGSDf/footer-Vector-Mobile.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 1030px;
  padding: 80px 20px 44px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 50px;
  margin: 0 auto 60px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-bottom: 66px;
`;

export const ContactLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Icon = styled.img``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding-left: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const SubLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding-left: 20px;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Copyright = styled.div`
  background: #ffffff;
  height: 90px;
`;

export const CopyrightTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0 8px;
  gap: 96px;
  border-bottom: 1px solid rgb(13, 110, 183, 0.2);
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #4c4c4c;
`;

export const CopyrightBottom = styled.div`
  padding-top: 12px;
  text-align: center;
`;
