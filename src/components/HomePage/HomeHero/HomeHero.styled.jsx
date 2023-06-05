import styled from '@emotion/styled';
import { HiMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-top: 92px;
  position: relative;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: -92px;
  background-image: url(https://i.ibb.co/Sw8jJzq/hero-background-mobile.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 340px;
`;

export const HeroVector = styled.div`
  position: absolute;
  top: -92px;
  background-image: url(https://i.ibb.co/0JYbyMG/hero-vector-mobile.png);
  background-position: end;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 370px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  width: 100%;
`;

export const MenuIcon = styled(HiMenu)`
  width: 36px;
  height: 30px;
  color: #fff;
  z-index: 999;
  cursor: pointer;
`;

export const StyledLink = styled(NavLink)``;

export const Logo = styled.img`
  width: 140px;
  height: 35px;
`;

export const HeroTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.58;
  letter-spacing: 0.05em;
  color: #ffffff;
  min-width: 330px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 16px;
  margin-bottom: 80px;
`;

export const ButtonMore = styled.button`
  display: block;
  border-radius: 6px;
  cursor: pointer;

  font-weight: 700;
  font-size: 16px;
  line-height: 2.25;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  color: #ffffff;
  width: 145px;
  text-align: center;
  background-color: transparent;
  border: 2px solid #fff;
`;

export const ButtonContactUs = styled.button`
  display: block;
  background: #06b25f;
  border-radius: 6px;
  cursor: pointer;

  font-weight: 700;
  font-size: 16px;
  line-height: 2.25;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #ffffff;
  width: 145px;
  border: 2px solid transparent;
`;

export const Text = styled.p`
  padding: 0 28px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  color: #242424;
  text-align: center;
  margin: 0 auto;
  max-width: 384px;
  width: 100%;
`;
