import { Navlinks } from '@/constants/navlinks';
import { MenuWrap } from './styled';
import { NavLink } from 'react-router-dom';
import { ForwardedRef, forwardRef } from 'react';

export const Menu = forwardRef(function Menu(
  props: { isOpen: boolean; currentPath: string },
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
