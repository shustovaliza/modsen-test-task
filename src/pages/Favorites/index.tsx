import { QueryStatus } from '@reduxjs/toolkit/query';

import FavoritesIcon from '@/assets/icons/bookmark.svg?react';
import { FavoriteArtworksList } from '@/components/FavoriteArtworksList';
import { FetchError } from '@/components/FetchError';
import { Loader } from '@/components/Loader';
import { useGetArtworksByIdsQuery } from '@/store/api/artworks/artworks.api';
import { getFavoriteArtworksId } from '@/store/slices/artworks.slice.selectors';
import { useAppSelector } from '@/store/store.types';
import { H2Wrap, PageBlock } from '@/styles/sharedStyles';

import { FavoritesPageContainer } from './styled';

const FavoritesPage = () => {
  const favoriteArtworksId = useAppSelector(getFavoriteArtworksId);

  const { data, status } = useGetArtworksByIdsQuery(favoriteArtworksId);

  if (status === QueryStatus.pending) {
    return <Loader />;
  }

  if (status === QueryStatus.rejected) {
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
          <FavoriteArtworksList
            data={data}
            favoriteArtworksId={favoriteArtworksId}
          />
        </PageBlock>
      </FavoritesPageContainer>
    )
  );
};

export default FavoritesPage;
