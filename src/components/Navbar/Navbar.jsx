import { useSelector, useDispatch } from 'react-redux';
import { selectIsMenuOpen } from 'redux/selectors';
import { toggleMenuMode } from 'redux/slices/burgerMenuSlice';
import { Link } from 'react-router-dom';
import { HeaderWrapper, MenuIcon } from './Navbar.styled';

const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <HeaderWrapper>
      <Link to="/">
        <img
          src="https://i.ibb.co/BLhjJpy/Color-Logo-Mobile.png"
          alt="stans assets logo color"
          width={140}
          height={35}
        />
      </Link>

      <MenuIcon
        onClick={() => dispatch(toggleMenuMode())}
        aria-label={isMenuOpen ? 'Open Menu' : 'Close Menu'}
      />
    </HeaderWrapper>
  );
};

export default Navbar;
