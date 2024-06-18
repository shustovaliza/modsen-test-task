import { ForwardedRef, forwardRef, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Navlinks } from '@/constants/navlinks';

import { MenuWrap } from './styled';

type MenuProps = {
  isOpen: boolean;
  currentPath: string;
  onNavlinkClick: () => void;
};

export const Menu = memo(
  forwardRef(function Menu(
    { isOpen, currentPath, onNavlinkClick }: MenuProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <MenuWrap data-open={isOpen} ref={ref}>
        {Navlinks().map(({ path, image, title }) => (
          <NavLink
            key={path}
            to={path}
            data-active={currentPath === path}
            onClick={onNavlinkClick}
          >
            {image}
            {title}
          </NavLink>
        ))}
      </MenuWrap>
    );
  }),
);
