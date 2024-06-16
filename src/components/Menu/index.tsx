import { ForwardedRef, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Navlinks } from '@/constants/navlinks';

import { MenuWrap } from './styled';

type MenuProps = {
  isOpen: boolean;
  currentPath: string;
};

export const Menu = forwardRef(function Menu(
  props: MenuProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <MenuWrap data-open={props.isOpen} ref={ref}>
      {Navlinks().map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          data-active={props.currentPath === link.path}
        >
          {link.image}
          {link.title}
        </NavLink>
      ))}
    </MenuWrap>
  );
});
