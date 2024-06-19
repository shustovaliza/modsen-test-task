import { RootState } from '../store.types';
import reducer, { artworksActions } from './artworks.slice';
import {
  getFavoriteArtworksId,
  isArtworkFavorite,
} from './artworks.slice.selectors';

describe('artworkSlice test', () => {
  test('must return the initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      favoriteArtworks: [],
    });
  });

  test('must handle adding an id to an empty list', () => {
    const previousState = { favoriteArtworks: [] };
    expect(
      reducer(previousState, artworksActions.addArtworkToFavorites(26)),
    ).toEqual({ favoriteArtworks: [26] });
  });

  test('must handle removing an id from the list', () => {
    const previousState = { favoriteArtworks: [34, 53, 49, 32, 45490] };
    expect(
      reducer(previousState, artworksActions.addArtworkToFavorites(32)),
    ).toEqual({ favoriteArtworks: [34, 53, 49, 45490] });
  });
});

describe('isArtworkFavorite selector test', () => {
  test('list is empty', () => {
    const previousState = {
      baseApi: {} as RootState['baseApi'],
      artworks: {
        favoriteArtworks: [],
      },
    };
    expect(isArtworkFavorite(previousState, 38)).toBe(false);
  });

  test('normal case', () => {
    const previousState = {
      baseApi: {} as RootState['baseApi'],
      artworks: {
        favoriteArtworks: [447, 5849, 83429, 483, 38294],
      },
    };
    expect(isArtworkFavorite(previousState, 5849)).toBe(true);
  });

  test('there is no such id in the list', () => {
    const previousState = {
      baseApi: {} as RootState['baseApi'],
      artworks: {
        favoriteArtworks: [447, 5849, 83429, 483, 38294],
      },
    };
    expect(isArtworkFavorite(previousState, 234)).toBe(false);
  });
});

describe('getFavoriteArtworksId selector test', () => {
  test('normal case', () => {
    const previousState = {
      baseApi: {} as RootState['baseApi'],
      artworks: {
        favoriteArtworks: [447, 5849, 83429, 483, 38294],
      },
    };
    expect(getFavoriteArtworksId(previousState)).toEqual([
      447, 5849, 83429, 483, 38294,
    ]);
  });

  test('list is empty', () => {
    const previousState = {
      baseApi: {} as RootState['baseApi'],
      artworks: {
        favoriteArtworks: [],
      },
    };
    expect(getFavoriteArtworksId(previousState)).toEqual([]);
  });
});
