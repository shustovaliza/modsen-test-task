import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

import BurgerMenu from '@/assets/icons/burgerMenu.svg?react';
import CloseBurgerMenu from '@/assets/icons/closeIcon.svg?react';
import Logo from '@/assets/icons/logo.svg?react';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import { Menu } from '../Menu';
import {
  BurgerMenuButton,
  HeaderContentWrap,
  HeaderLogoWrap,
  StyledHeader,
} from './styled';

export const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => setIsOpen(false));

  const toggleMenu = useCallback(() => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  }, []);

  return (
    <StyledHeader>
      <HeaderContentWrap>
        <HeaderLogoWrap>
          <Logo />
        </HeaderLogoWrap>
        <Menu
          isOpen={isOpen}
          onNavlinkClick={toggleMenu}
          ref={ref}
          currentPath={pathname}
        />
        <BurgerMenuButton onClick={toggleMenu}>
          {isOpen ? <CloseBurgerMenu /> : <BurgerMenu />}
        </BurgerMenuButton>
      </HeaderContentWrap>
    </StyledHeader>
  );
};
