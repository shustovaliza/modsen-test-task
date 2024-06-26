import { ImgHTMLAttributes } from 'react';

import notFoundImage from '@/assets/pictures/notFoundImage.png';
import { IMAGE_API_URL } from '@/constants/api';

import {
  GetCurrentPageProps,
  GetImageProps,
  GetTotalNumberOfPagesProps,
} from './utils.types';

export const getCurrentPage = ({
  searchParameters,
  totalPages,
}: GetCurrentPageProps) => {
  const page = +(searchParameters.get('page') || 1);

  if (page < 1) {
    return 1;
  }

  return page > totalPages ? totalPages : page;
};

export const getImageProps = ({
  image_id,
  imageSize,
  title,
}: GetImageProps & ImgHTMLAttributes<HTMLImageElement>) => {
  return {
    src:
      image_id === null
        ? notFoundImage
        : `${IMAGE_API_URL}${image_id}/full/${imageSize},/0/default.jpg`,
    alt: `${title} picture`,
  };
};

export const getTotalNumberOfPages = ({
  totalNumberOfPages,
  maxNumberOfPages,
}: GetTotalNumberOfPagesProps) => {
  if (totalNumberOfPages) {
    return totalNumberOfPages >= maxNumberOfPages
      ? maxNumberOfPages
      : totalNumberOfPages;
  } else {
    return 1;
  }
};
