import notFoundImage from '@/assets/pictures/notFoundImage.png';
import { IMAGE_API_URL } from '@/constants/api';

import { getCurrentPage, getImageProps, getTotalNumberOfPages } from './utils';

describe('getCurrentPage test', () => {
  test('current page is less than 1', () => {
    expect(
      getCurrentPage({
        searchParameters: new URLSearchParams('page=-1'),
        totalPages: 3,
      }),
    ).toBe(1);
  });

  test('there are no searchParams', () => {
    expect(
      getCurrentPage({
        searchParameters: new URLSearchParams(),
        totalPages: 3,
      }),
    ).toBe(1);
  });

  test('current page is more than total pages', () => {
    expect(
      getCurrentPage({
        searchParameters: new URLSearchParams('page=3'),
        totalPages: 2,
      }),
    ).toBe(2);
  });

  test('normal case', () => {
    expect(
      getCurrentPage({
        searchParameters: new URLSearchParams('page=3'),
        totalPages: 5,
      }),
    ).toBe(3);
  });
});

describe('getImageProps test', () => {
  test('normal case', () => {
    expect(
      getImageProps({
        image_id: '45',
        imageSize: '500',
        title: 'Flowers',
      }),
    ).toEqual({
      src: `${IMAGE_API_URL}45/full/500,/0/default.jpg`,
      alt: `Flowers picture`,
    });
  });

  test('image_id === null', () => {
    expect(
      getImageProps({
        image_id: null,
        imageSize: '500',
        title: 'Flowers',
      }),
    ).toEqual({
      src: notFoundImage,
      alt: `Flowers picture`,
    });
  });
});

describe('getTotalNumberOfPages test', () => {
  test('totalNumberOfPages is more than maxNumberOfPages', () => {
    expect(
      getTotalNumberOfPages({
        totalNumberOfPages: 45,
        maxNumberOfPages: 30,
      }),
    ).toBe(30);
  });

  test('total number of pages is undefined', () => {
    expect(
      getTotalNumberOfPages({
        totalNumberOfPages: undefined,
        maxNumberOfPages: 30,
      }),
    ).toBe(1);
  });

  test('totalNumberOfPages is less than maxNumberOfPages', () => {
    expect(
      getTotalNumberOfPages({
        totalNumberOfPages: 20,
        maxNumberOfPages: 30,
      }),
    ).toBe(20);
  });
});
