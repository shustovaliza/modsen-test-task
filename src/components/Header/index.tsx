import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import BurgerMenu from '@/assets/icons/burgerMenu.svg?react';
import CloseBurgerMenu from '@/assets/icons/closeIcon.svg?react';
import Logo from '@/assets/icons/logo.svg?react';

import { Menu } from '../Menu';
import {
  BurgerMenuButton,
  HeaderContentWrap,
  HeaderLogoWrap,
  StyledHeader,
} from './styled';

export const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, [ref]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <StyledHeader>
      <HeaderContentWrap>
        <HeaderLogoWrap>
          <Logo />
        </HeaderLogoWrap>
        <Menu isOpen={isOpen} ref={ref} currentPath={location.pathname} />
        <BurgerMenuButton
          onClick={() => setIsOpen((hasBeenOpened) => !hasBeenOpened)}
        >
          {isOpen ? <CloseBurgerMenu /> : <BurgerMenu />}
        </BurgerMenuButton>
      </HeaderContentWrap>
    </StyledHeader>
  );
};
