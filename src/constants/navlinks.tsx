import { ReactElement } from 'react';
import FavoritesIcon from '@/assets/icons/bookmark.svg?react';
import HomeIcon from '@/assets/icons/home.svg?react';

interface Navlink {
  path: string;
  title: string;
  image: ReactElement;
}

export const Navlinks = (): Navlink[] => {
  return [
    {
      path: '/',
      title: 'Home',
      image: <HomeIcon />,
    },
    {
      path: '/favorites',
      title: 'Your favorites',
      image: <FavoritesIcon />,
    },
  ];
};
