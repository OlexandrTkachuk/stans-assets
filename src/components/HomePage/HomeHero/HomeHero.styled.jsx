import styled from '@emotion/styled';
import { HiMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  background-image: url(https://i.ibb.co/Sw8jJzq/hero-background-mobile.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 340px;
`;

export const  HeroBackground = styled.div``

export const HeroVector = styled.div`
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
`;

export const StyledLink = styled(NavLink)``;

export const Logo = styled.img`
  width: 140px;
  height: 35px;
`;
