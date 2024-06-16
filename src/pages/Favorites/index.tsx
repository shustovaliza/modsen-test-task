import FavoritesIcon from '@/assets/icons/bookmark.svg?react';
import { ArtworkCard } from '@/components/ArtworkCard';
import { FetchError } from '@/components/FetchError';
import { Loader } from '@/components/Loader';
import { useGetArtworksByIdsQuery } from '@/store/api/artworks/artworks.api';
import { useAppSelector } from '@/store/store.types';
import { H2Wrap, PageBlock } from '@/styles/sharedStyles';

import {
  EmptyList,
  FavoriteArtworksWrap,
  FavoritesPageContainer,
} from './styled';

export const FavoritesPage = () => {
  const favoriteArtworksId = useAppSelector(
    (state) => state.artworks.favoriteArtworks,
  );

  const { data, status } = useGetArtworksByIdsQuery(favoriteArtworksId);

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <FetchError />;
  }

  return (
    data && (
      <FavoritesPageContainer>
        <h1>
          Here Are Your
          <div>
            <FavoritesIcon />
            Favorites
          </div>
        </h1>
        <PageBlock>
          <H2Wrap>
            <span>Saved by you</span>
            <h2>Your favorites list</h2>
          </H2Wrap>
          {favoriteArtworksId.length ? (
            <FavoriteArtworksWrap>
              {data.data.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  appearance="small"
                />
              ))}
            </FavoriteArtworksWrap>
          ) : (
            <EmptyList>
              <h2>There is nothing in your list of favorite artworks yet</h2>
            </EmptyList>
          )}
        </PageBlock>
      </FavoritesPageContainer>
    )
  );
};
