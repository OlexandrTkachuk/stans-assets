import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.div`
  position: relative;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999;
  display: block;
  width: 300px;
  max-width: 100%;
  background: #ffffff;
  padding-top: 8px;

  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  box-shadow: 2px 4px 16px rgba(158, 158, 158, 0.4);
  border-bottom-right-radius: 16px;

  ${props =>
    props.isOpen
      ? 'transform: translateX(0);'
      : 'transform: translateX(-110%);'}
`;

export const ButtonClose = styled.button`
  display: block;
  color: #06b25f;
  cursor: pointer;
  background-color: #fff;
  border: none;
  outline: none;
  padding: 8px 12px;
  margin-left: 210px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

export const Item = styled.li`
  margin-bottom: 6px;
`;

export const SubItem = styled.li`
  margin-bottom: 5px;
  padding-left: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: #08a4e4;
  text-transform: uppercase;
`;

export const AnchorLink = styled.a`
  color: #08a4e4;
  text-transform: uppercase;
`;

export const ButtonContact = styled(NavLink)`
  display: block;
  margin: 0 auto;

  text-align: center;
  text-transform: uppercase;

  color: #06b25f;
  background: #ffffff;
  border: 2px solid #06b25f;
  border-radius: 6px;
  max-width: 145px;

  font-weight: 700;
  font-size: 16px;
  line-height: 2.25;
  color: #06b25f;

  margin-top: 20px;
  margin-bottom: 44px;
`;
